export class AuthService {
  static readonly AdminIds = [934785648, 389718650];
  static readonly isAdmin = (userId: string | number) => {
    return AuthService.AdminIds.includes(Number(userId));
  };
}
