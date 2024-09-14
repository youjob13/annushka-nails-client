import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, of, tap } from 'rxjs';
import { API_CONFIG } from '../../config';
import { Role } from '../domain/role.constants';
import { MainRoute } from '../domain/router.constants';
import { UserService } from '../domain/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public static readonly RolesMap = {
    [Role.Admin]: MainRoute.AdminProfile,
    [Role.User]: MainRoute.UserProfile,
  };

  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(API_CONFIG).baseEndpoint;
  private readonly userService = inject(UserService);
  private readonly isAdmin$$ = new BehaviorSubject<boolean>(false);
  readonly isAdmin = toSignal(this.isAdmin$$, { initialValue: false });

  public authCheck() {
    return (
      // this.http
      // .get<{ role: Role }>(`${this.baseUrl}/auth/check`)
      of(1)
        .pipe(tap(() => this.userService.setUserData({ role: Role.User })))
        .pipe(
          tap((role) =>
            this.isAdmin$$.next((role as unknown as Role) === Role.Admin)
          )
        )
        .subscribe()
    );
  }
}
