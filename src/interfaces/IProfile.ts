export interface IProfile {
  id: number;
  name: string;
  username: string;
  role: string;
  created_at: string;
  updated_at: string;
  last_login: string;
  device: string;
  school: unknown;
}

export interface ICredentials {
  token: string;
  profile: IProfile;
}
