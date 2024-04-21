import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IMPORTS } from './header.config';
import { NavigationEnd, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject, filter } from 'rxjs';
import { AuthRoute } from '../../domain/router.constants';
import {
  AUTH_BUTTON_CONTENT_BY_PATH,
  SignInButtonContent,
} from './header.constants';
import { HeaderService } from './header.service';

@Component({
  selector: 'ann-header',
  standalone: true,
  imports: IMPORTS,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly router = inject(Router);
  public readonly headerService = inject(HeaderService);

  protected readonly authButtonContent$$ = new BehaviorSubject({
    title: SignInButtonContent.SignIn,
    link: `/${AuthRoute.Login}`,
  });

  constructor() {
    this.router.events
      .pipe(
        takeUntilDestroyed(),
        filter((event) => event instanceof NavigationEnd)
        // todo: fired on each navigation
      )
      .subscribe({
        next: () => {
          const content = this.getAuthButtonContent(this.router.url);
          this.authButtonContent$$.next(content);
        },
      });
  }

  private getAuthButtonContent(url: string) {
    if (url.includes(AuthRoute.Login)) {
      return AUTH_BUTTON_CONTENT_BY_PATH[AuthRoute.Registration];
    } else if (url.includes(AuthRoute.Registration)) {
      return AUTH_BUTTON_CONTENT_BY_PATH[AuthRoute.Login];
      // todo
    } else if (!this.headerService.isAuthorized$$.getValue()) {
      return AUTH_BUTTON_CONTENT_BY_PATH[AuthRoute.Login];
    }

    return AUTH_BUTTON_CONTENT_BY_PATH[AuthRoute.Logout];
  }
}
