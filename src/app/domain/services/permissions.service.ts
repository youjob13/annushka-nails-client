import { Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';
import { Role } from '../role.constants';
import { UserService } from './user.service';

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
