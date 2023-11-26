// auth types
export type IUserInfo = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
};

export type IAction = {
  type: "register" | "login" | null;
  loading: boolean;
};

export interface IAuthReducer {
  userInfo: IUserInfo | null;
  token: null | string;
  action: IAction;
  isModalVisible: boolean;
}
