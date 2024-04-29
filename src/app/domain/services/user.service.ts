import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, map } from 'rxjs';
import * as DTO from '../../dto';
import { Role } from '../role.constants';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly userData$$ = new BehaviorSubject<DTO.IUserInfo>({
    role: Role.User,
    name: 'Danil Rodionov',
    email: 'danil.rodionow13@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/10106368',
    phone: '+7 (999) 999-99-99',
  });
  public readonly userData = toSignal(this.userData$$, { requireSync: true });
  // todo: extract role from user data
  private readonly userRole$$ = new BehaviorSubject(Role.Admin);
  public readonly userRole$ = this.userRole$$.asObservable();

  public readonly isAuthorized$ = this.userRole$$.pipe(
    map((role) => role !== Role.Guest)
  );

  public setRole(role: Role) {
    this.userRole$$.next(role);
    return this.isAuthorized$;
  }
}
