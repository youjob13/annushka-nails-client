import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
} from '@taiga-ui/core';
import { AppearanceModule } from './appereance/appereance.module';

@Component({
  selector: 'ann-root',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterOutlet,
    RouterLink,
    AppearanceModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
})
export class AppComponent {
  title = 'annushka-nails-clients';
}
