import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiIconModule } from '@taiga-ui/experimental';
import { PwaPromptService } from './pwa-prompt.service';

@Component({
  selector: 'ann-pwa-prompt',
  standalone: true,
  styleUrls: ['./pwa-prompt.component.scss'],
  imports: [TuiIconModule, TuiButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-template #templateRef>
    <div class="prompt-wrapper">
      <p class="title">Install app</p>
      <button tuiButton (click)="download()">
        <tui-icon class="icon" icon="tuiIconCalendar"></tui-icon>
      </button>
    </div>
  </ng-template>`,
})
export class PWAPromptComponent implements OnInit {
  @ViewChild('templateRef', { static: true }) templateRef:
    | TemplateRef<null>
    | undefined;

  private pwaPromptService = inject(PwaPromptService);

  ngOnInit(): void {
    if (this.templateRef) {
      this.pwaPromptService.initPwaPrompt(this.templateRef);
    }
  }

  public download() {
    console.log('asddsa');
  }
}
