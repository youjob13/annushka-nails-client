import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AUTH_CONFIG } from '../../../config';
import { AuthData } from '../auth.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly authConfig = inject(AUTH_CONFIG);

  public login(authData: AuthData) {
    return this.http.post(`${this.authConfig}/login`, authData);
  }
}
