export interface ILogin {
  email: string;
  password: string;
}

export interface IUser extends ILogin {
  firstName: string;
  lastName: string;
}

export interface ILoginResponse {
  token: string;
}
