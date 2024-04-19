export interface AuthData {
  username: string;
  password: string;
}

export enum AuthAction {
  Login = 'login',
  Registration = 'registration',
}
