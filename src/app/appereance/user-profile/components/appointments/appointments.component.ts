import { AsyncPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TuiMaskAccessorModule } from '@taiga-ui/core';
import {
  TuiAmountPipeModule,
  TuiCardModule,
  TuiHeaderModule,
  TuiIconModule,
  TuiSurfaceModule,
  TuiTitleModule,
} from '@taiga-ui/experimental';
import { TuiAvatarModule } from '@taiga-ui/kit';
import * as DTO from '../../../../dto';

@Component({
  selector: 'ann-appointments',
  standalone: true,
  imports: [
    TuiAvatarModule,
    TuiCardModule,
    TuiIconModule,
    TuiMaskAccessorModule,
    TuiHeaderModule,
    TuiSurfaceModule,
    TuiTitleModule,
    TuiAmountPipeModule,
    AsyncPipe,
    DatePipe,
  ],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentsComponent {
  public appointments = input.required<DTO.IAppointment[]>();
}
