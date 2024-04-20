import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { IMPORTS } from './header.config';
import { NavigationEnd, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject, filter } from 'rxjs';

enum SignInButtonContent {
  SignIn = 'Sign In',
  SignUp = 'Sign Up',
  SignOut = 'Sign Out',
}

const AUTH_BUTTON_CONTENT_BY_PATH = {
  login: { title: SignInButtonContent.SignIn, link: '/auth/login' },
  registration: {
    title: SignInButtonContent.SignUp,
    link: '/auth/registration',
  },
  logout: { title: SignInButtonContent.SignOut, link: '/logout' },
} as const;

const MAIN_NAVIGATION_ITEMS = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
];

@Component({
  selector: 'ann-header',
  standalone: true,
  imports: IMPORTS,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() isAuthorized = false;

  private readonly router = inject(Router);

  protected readonly navigationItems = MAIN_NAVIGATION_ITEMS;

  protected $signInButtonContent = new BehaviorSubject({
    title: SignInButtonContent.SignIn,
    link: '/login',
  });

  constructor() {
    this.router.events
      .pipe(
        takeUntilDestroyed(),
        filter((event) => event instanceof NavigationEnd),
        filter(() => !this.isAuthorized)
      )
      .subscribe(() => {
        const content = this.getAuthButtonContent(this.router.url);
        this.$signInButtonContent.next(content);
      });
  }

  private getAuthButtonContent(url: string) {
    if (url.includes('login')) {
      return AUTH_BUTTON_CONTENT_BY_PATH['registration'];
    } else if (url.includes('registration')) {
      return AUTH_BUTTON_CONTENT_BY_PATH['login'];
    } else if (!this.isAuthorized) {
      return AUTH_BUTTON_CONTENT_BY_PATH['login'];
    }

    return AUTH_BUTTON_CONTENT_BY_PATH['logout'];
  }
}
