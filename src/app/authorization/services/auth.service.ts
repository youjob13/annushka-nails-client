import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { AUTH_CONFIG } from '../../../config';
import { Role } from '../../domain/role.constants';
import { AuthRoute, MainRoute } from '../../domain/router.constants';
import { UserService } from '../../domain/services/user.service';
import { LoginAuthData, RegistrationAuthData } from '../auth.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private static readonly RolesMap = {
    [Role.Admin]: MainRoute.AdminProfile,
    [Role.User]: MainRoute.UserProfile,
  };

  private readonly http = inject(HttpClient);
  private readonly authConfig = inject(AUTH_CONFIG);
  private readonly userService = inject(UserService);
  private readonly router = inject(Router);

  public login(authData: LoginAuthData) {
    return this.http.post<Role>(`${this.authConfig}/login`, authData).pipe(
      tap((role) => this.userService.setRole(role)),
      tap((role) =>
        this.router.navigateByUrl(
          AuthService.RolesMap[role as keyof typeof AuthService.RolesMap]
        )
      ),
      switchMap(() => this.userService.isAuthorized$)
    );
  }

  public signUp(authData: RegistrationAuthData) {
    return this.http.post(`${this.authConfig}/signUp`, authData);
  }

  public logout() {
    this.userService.setRole(Role.Guest);
    if (this.router.url.includes(MainRoute.UserProfile)) {
      this.router.navigateByUrl(`${MainRoute.Auth}/${AuthRoute.Login}`);
    }

    return this.http.post(`${this.authConfig}/logout`, {}).pipe(
      tap(() => {
        console.log('Logout');
      })
    );
  }
}
