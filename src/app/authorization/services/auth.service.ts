import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, switchMap, tap, throwError } from 'rxjs';
import { API_CONFIG } from '../../../config';
import { Role } from '../../domain/role.constants';
import { AuthRoute, MainRoute } from '../../domain/router.constants';
import { UserService } from '../../domain/services/user.service';
import { IUserInfo } from '../../dto';
import { LoginAuthData, RegistrationAuthData } from '../auth.models';

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
  private readonly router = inject(Router);

  public authCheck() {
    return this.http
      .get<{ role: Role }>(`${this.baseUrl}/auth/check`)
      .pipe(navigateAuthorizedUser(this.router, this.userService, true))
      .subscribe();
  }

  public login(authData: LoginAuthData) {
    return this.http
      .post<{ role: Role }>(`${this.baseUrl}/login`, authData)
      .pipe(
        navigateAuthorizedUser(this.router, this.userService),
        switchMap(() => this.userService.isAuthorized$)
      );
  }

  public loginInstagram() {
    return this.http.get(`${this.baseUrl}/auth/instagram`);
  }

  public loginGoogle() {
    return this.http.get(
      'https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Fapi%2Fauth%2Fcallback&scope=profile&client_id=964723558332-f58v3221dm0l4jq3q1arjqiu8kdkur2i.apps.googleusercontent.com'
    );
    // return this.http
    // .get(`${this.baseUrl}/auth/google`, {
    // headers: {
    // 'Access-Control-Allow-Origin': '*',
    // },
    // })
    // .pipe(
    // tap(
    // (a) => console.log(a),
    // (er) => console.log(er)
    // )
    // );
  }

  public signUp(authData: Omit<RegistrationAuthData, 'repeatedPassword'>) {
    return this.http.post<IUserInfo>(`${this.baseUrl}/signUp`, authData).pipe(
      switchMap((userInfo) => this.userService.setUserData(userInfo)),
      switchMap(() => this.userService.userRole$),
      tap((role) =>
        this.router.navigateByUrl(
          AuthService.RolesMap[role as keyof typeof AuthService.RolesMap]
        )
      ),
      catchError((error) => {
        console.log(error);
        return throwError(error);
      })
    );
  }

  public logout() {
    this.userService.setUserData({ role: Role.Guest });
    this.router.navigateByUrl(`${MainRoute.Auth}/${AuthRoute.Login}`);

    return this.http.get(`${this.baseUrl}/logout`);
  }
}

function navigateAuthorizedUser(
  router: Router,
  userService: UserService,
  skipNavigation = false
) {
  return (userInfo$: Observable<IUserInfo>) => {
    const observable = userInfo$.pipe(
      tap((userInfo) => userService.setUserData(userInfo)),
      catchError((error) => {
        if (error.status === 401) {
          userService.setUserData({ role: Role.Guest });
        }
        return throwError(error);
      })
    );

    if (skipNavigation) {
      return observable;
    }

    return observable.pipe(
      tap(({ role }) =>
        router.navigateByUrl(
          AuthService.RolesMap[role as keyof typeof AuthService.RolesMap]
        )
      ),
      catchError((error) => {
        if (error.status === 401) {
          router.navigateByUrl(`${MainRoute.Auth}/${AuthRoute.Login}`);
        }
        return throwError(error);
      })
    );
  };
}
