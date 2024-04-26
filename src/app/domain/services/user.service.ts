import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Role } from '../role.constants';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly userRole$$ = new BehaviorSubject(Role.User);
  public readonly userRole$ = this.userRole$$.asObservable();

  public readonly isAuthorized$ = this.userRole$$.pipe(
    map((role) => role !== Role.Guest)
  );

  public setRole(role: Role) {
    this.userRole$$.next(role);
    return this.isAuthorized$;
  }
}
