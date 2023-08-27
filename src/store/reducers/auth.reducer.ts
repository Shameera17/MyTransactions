import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { IAction, IAuthReducer, IUserInfo } from "store/types/interfaces";

import { RootState } from "..";

const initialState: IAuthReducer = {
  userInfo: null,
  token: "",
  action: {
    type: null,
    loading: false
  },
  isModalVisible: false
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<IUserInfo>) => {
      state.userInfo = action.payload;
    },
    signout: state => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
    setToken(state, action: PayloadAction<{ token: string }>) {
      console.log(action.payload.token);
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
    },
    manageModal(state) {
      state.isModalVisible = !state.isModalVisible;
    },
    clearToken(state) {
      state.token = null;
    },
    updateAction(state, action: PayloadAction<IAction>) {
      state.action = action.payload;
    },
    resetAction(state) {
      state.action = initialState.action;
    },
    refreshAuthToken(state) {
      if (!state.userInfo && !state.token) {
        const token = localStorage.getItem("token");
        const decodedToken = jwtDecode(token!);
        // // Verify the token and extract the payload (user data) if valid
        // const decoded: any = Jwt.verify(token!, secretKey!);
        state.userInfo = decodedToken as any;
        state.token = token;
      }
    }
  }
});
export const {
  setUserInfo,
  signout,
  setToken,
  clearToken,
  updateAction,
  resetAction,
  manageModal,
  refreshAuthToken
} = authSlice.actions;

export default authSlice.reducer;
export const auth = (state: RootState) => state.auth;
