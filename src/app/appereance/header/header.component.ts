import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ResponsiveDirective } from '../../common/services/responsive.directive';
import { MainRoute } from '../../domain/router.constants';
import { UserService } from '../../domain/services/user.service';
import { IMPORTS } from './header.config';
import { MAIN_NAVIGATION_ITEMS } from './header.constants';
import { HeaderService } from './header.service';

@Component({
  selector: 'ann-header',
  standalone: true,
  imports: IMPORTS,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent extends ResponsiveDirective {
  private readonly document = inject(DOCUMENT);
  protected readonly headerService = inject(HeaderService);
  private readonly userService = inject(UserService);
  protected readonly initialActiveTabItemIndex =
    Object.values(MAIN_NAVIGATION_ITEMS).findIndex((navItem) =>
      this.document.location.pathname.includes(navItem.link)
    ) || 0;

  protected readonly isAdmin = this.userService.isAdmin;
  protected readonly Logo = 'Annushka nails';
  protected readonly MainRoute = MainRoute;
}
