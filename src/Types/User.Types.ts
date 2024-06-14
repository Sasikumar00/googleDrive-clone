export type jwtPayloadType = {
  id: number;
  name: string;
  email: string;
};

export interface IUserInfo {
  fullName: string;
  username: string;
  email: string;
  password: string;
  saltKey: string;
}
