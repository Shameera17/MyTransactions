// auth types
export type IUserInfo = {
  id: string;
  name: string;
  email: string;
  role: "seller" | "buyer";
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
