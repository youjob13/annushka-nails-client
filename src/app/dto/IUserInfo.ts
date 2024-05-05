export interface IUserInfo {
  role: string;
  username?: string;
  email?: string | null;
  avatar?: string | null;
  phone?: string | null;
  notifyVia?: string[];
}
