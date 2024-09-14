import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReplaySubject } from 'rxjs';
import * as DTO from '../../dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly httpClient = inject(HttpClient);

  private readonly userData$$ = new ReplaySubject<DTO.IUserInfo>(1);
  public readonly userData = toSignal(this.userData$$);
  // todo: extract role from user data
  private readonly userRole$$ = new ReplaySubject(1);
  public readonly userRole$ = this.userRole$$.asObservable();

  public setUserData(userData: DTO.IUserInfo) {
    this.userRole$$.next(userData.role);
    this.userData$$.next(userData);
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
