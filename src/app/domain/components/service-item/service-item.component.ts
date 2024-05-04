import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  forwardRef,
  input,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  TuiButtonModule,
  TuiDialogModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
  TuiButtonCloseModule,
  TuiCardModule,
  TuiHeaderModule,
  TuiIconModule,
  TuiSurfaceModule,
} from '@taiga-ui/experimental';
import {
  TuiBadgeModule,
  TuiInputModule,
  TuiRadioBlockModule,
  TuiValueAccessorModule,
} from '@taiga-ui/kit';
import { ResponsiveDirective } from '../../../common';
import * as DTO from '../../../dto';

type EditableFormGroup = Record<
  keyof DTO.IService,
  FormControl<DTO.IService[keyof DTO.IService]>
>;

// TODO: bad approach, should be two different components - editable & selectable
@Component({
  selector: 'ann-service-item',
  standalone: true,
  imports: [
    TuiRadioBlockModule,
    ReactiveFormsModule,
    TuiSurfaceModule,
    TuiValueAccessorModule,
    TuiHeaderModule,
    TuiBadgeModule,
    FormsModule,
    NgTemplateOutlet,
    TuiInputModule,
    TuiButtonModule,
    TuiTextfieldControllerModule,
    TuiDialogModule,
    TuiCardModule,
    TuiButtonCloseModule,
    TuiIconModule,
  ],
  templateUrl: './service-item.component.html',
  styleUrl: './service-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ServiceItemComponent),
      multi: true,
    },
  ],
})
export class ServiceItemComponent
  extends ResponsiveDirective
  implements ControlValueAccessor, OnInit, OnChanges
{
  @Input() services: DTO.IService[] | null = [];
  disabled = input<boolean>();
  editable = input<boolean>(false);

  protected isAddServiceOpen = false;
  protected servicesControl = new FormControl<DTO.IService | null>(null);

  protected addServiceControl = this.newService(null);
  protected editableServicesControl: FormArray<FormGroup<EditableFormGroup>> =
    new FormArray<FormGroup<EditableFormGroup>>([]);

  private newService(service: DTO.IService | null) {
    return new FormGroup<EditableFormGroup>({
      name: new FormControl(service?.name || '', {
        nonNullable: true,
        validators: [Validators.required, Validators.min(2)],
      }),
      price: new FormControl(service?.price || 0, {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(/^\d+$/)],
      }),
      description: new FormControl(service?.description || '', {
        nonNullable: true,
      }),
      // todo: omit id
      id: new FormControl(service?.id || '', { nonNullable: true }),
    });
  }

  ngOnInit(): void {
    this.servicesControl.valueChanges.subscribe((service) => {
      if (service) {
        this.onChange(service);
      }
    });

    this.editableServicesControl.valueChanges.subscribe((service) => {
      if (service) {
        this.onChange(service);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['services'] && this.services) {
      const array = new FormArray<FormGroup<EditableFormGroup>>([]);
      this.services.forEach((service) => {
        if (service) {
          array.push(this.newService(service));
        }
      });
      this.editableServicesControl = array;
    }
  }

  public removeService(index: number) {
    this.editableServicesControl.removeAt(index);
  }

  public createNewService() {
    this.isAddServiceOpen = false;
    this.editableServicesControl.push(this.addServiceControl);
    this.addServiceControl = this.newService(null);
  }

  public addService() {
    this.isAddServiceOpen = true;
  }

  protected onChange: (
    value:
      | DTO.IService
      | Partial<{
          id: string | number;
          name: string | number;
          price: string | number;
          description: string | number;
        }>[]
  ) => void = () => {};
  private onTouch: (value: DTO.IService) => void = () => {};

  writeValue(value: DTO.IService): void {
    this.servicesControl.setValue(value);
  }
  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }
}
