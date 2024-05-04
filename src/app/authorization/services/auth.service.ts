import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { API_CONFIG } from '../../../config';
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
  private readonly baseUrl = inject(API_CONFIG).baseEndpoint;
  private readonly userService = inject(UserService);
  private readonly router = inject(Router);

  public login(authData: LoginAuthData) {
    return this.http
      .get<Role>(`${this.baseUrl}/login`, {
        headers: {
          Authorization: `Bearer ${authData.username}:${authData.password}`,
        },
      })
      .pipe(
        tap((role) => this.userService.setRole(role)),
        tap((role) =>
          this.router.navigateByUrl(
            AuthService.RolesMap[role as keyof typeof AuthService.RolesMap]
          )
        ),
        switchMap(() => this.userService.isAuthorized$)
      );
  }

  public loginInstagram() {
    return this.http.get(`${this.baseUrl}/auth/instagram`);
  }

  public signUp(authData: RegistrationAuthData) {
    return this.http.post(`${this.baseUrl}/signUp`, authData);
  }

  public logout() {
    this.userService.setRole(Role.Guest);
    this.router.navigateByUrl(`${MainRoute.Auth}/${AuthRoute.Login}`);

    return this.http.post(`${this.baseUrl}/logout`, {}).pipe(
      tap(() => {
        console.log('Logout');
      })
    );
  }
}
