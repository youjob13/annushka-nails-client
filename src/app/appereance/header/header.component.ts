import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';
import { AuthRoute } from '../../domain/router.constants';
import { IMPORTS } from './header.config';
import { AUTH_BUTTON_CONTENT_BY_PATH } from './header.constants';
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

  protected readonly authButtonContent$$ = new BehaviorSubject<Record<
    'link' | 'title',
    string
  > | null>(null);

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

  public logout() {
    this.headerService.logout();
  }

  private getAuthButtonContent(url: string) {
    if (url.includes(AuthRoute.Login)) {
      return AUTH_BUTTON_CONTENT_BY_PATH[AuthRoute.Registration];
    } else if (url.includes(AuthRoute.Registration)) {
      return AUTH_BUTTON_CONTENT_BY_PATH[AuthRoute.Login];
    } else if (!this.headerService.isAuthorized$$.getValue()) {
      return AUTH_BUTTON_CONTENT_BY_PATH[AuthRoute.Login];
    }
    return null;
  }
}
