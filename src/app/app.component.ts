import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  ChildrenOutletContexts,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import {
  TUI_SANITIZER,
  TuiAlertModule,
  TuiDialogModule,
  TuiRootModule,
} from '@taiga-ui/core';
import { TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE } from '@taiga-ui/i18n';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { of } from 'rxjs';
import { slideInAnimation } from './animations/route.animations';
import { HeaderComponent } from './appereance/header/header.component';
import { ResponsiveService } from './common/services/responsive.service';
import { TelegramService } from './domain/services/telegram/telegram.service';
import { UserService } from './domain/services/user.service';

@Component({
  selector: 'ann-root',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
  ],
  templateUrl: './app.component.html',
  animations: [slideInAnimation],
  providers: [
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    {
      provide: TUI_LANGUAGE,
      useValue: of(TUI_RUSSIAN_LANGUAGE),
    },
  ],
})
export class AppComponent {
  private readonly contexts = inject(ChildrenOutletContexts);
  private readonly responsiveService = inject(ResponsiveService);
  private readonly userService = inject(UserService);
  private readonly telegram = inject(TelegramService);

  constructor() {
    this.responsiveService.init();
    const userData = this.telegram.ready();
    this.userService.setUserData(userData);
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
