import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Role } from '../role.constants';

@Injectable({
  providedIn: 'root',
})
export class PermissionsService {
  private readonly userService = inject(UserService);

  constructor() {
    this.userService.userRole$
      .pipe(takeUntilDestroyed())
      .subscribe((userRole) => {
        this.hasAccessToAdminPage$$.next(userRole === Role.Admin);
      });
  }

  private readonly hasAccessToAdminPage$$ = new BehaviorSubject(false);
  public readonly hasAccessToAdminPage$ =
    this.hasAccessToAdminPage$$.asObservable();
}
