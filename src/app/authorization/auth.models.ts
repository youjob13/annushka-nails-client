export interface AuthDataBase {
  username: string;
  password: string;
}

export interface LoginAuthData extends AuthDataBase {}

export interface RegistrationAuthData extends AuthDataBase {
  repeatedPassword: string;
}

export enum AuthAction {
  Login = 'login',
  Registration = 'registration',
}
