import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { AuthService } from '../../authentication/auth.service';
import * as DTO from '../../dto';
import { Role } from '../role.constants';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly httpClient = inject(HttpClient);

  private readonly isAdmin$$ = new BehaviorSubject<boolean>(false);
  readonly isAdmin = toSignal(this.isAdmin$$, { initialValue: false });

  private readonly userData$$ = new ReplaySubject<DTO.IUserInfo>(1);
  public readonly userData = toSignal(this.userData$$);
  // todo: extract role from user data
  private readonly userRole$$ = new ReplaySubject(1);
  public readonly userRole$ = this.userRole$$.asObservable();

  public setUserData(
    userData: {
      id: number;
      first_name: string;
      last_name: string;
      username: string;
      language_code: string;
      allows_write_to_pm: boolean;
    }
    // DTO.IUserInfo
  ) {
    const isAdmin = AuthService.isAdmin(userData.id);
    this.isAdmin$$.next(isAdmin);

    const role = isAdmin ? Role.Admin : Role.User;
    this.userRole$$.next(role);
    this.userData$$.next({
      ...userData,
      role,
      full_name: `${userData.first_name} ${userData.last_name}`,
    });
    return this.userData;
  }

  public updateUserData(userData: DTO.IUserInfo) {
    return this.httpClient
      .put<DTO.IUserInfo>('/api/user', userData)
      .subscribe((userData) => {
        this.userData$$.next(userData);
      });
  }
}
