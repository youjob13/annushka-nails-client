export interface IUserInfo {
  role: string;
  username?: string;
  full_name: string;
  first_name: string;
  last_name: string;
  email?: string | null;
  avatar?: string | null;
  phone?: string | null;
  notifyVia?: string[];
}
