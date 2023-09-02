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
      localStorage.removeItem("token");
      state.userInfo = null;
      state.token = null;
    },
    setToken(state, action: PayloadAction<{ token: string }>) {
      console.log(action.payload.token);
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
    },
    manageModal(state) {
      state.isModalVisible = !state.isModalVisible;
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
        const decodedToken: any = token && jwtDecode(token!);

        if (decodedToken) {
          state.userInfo = {
            firstName: decodedToken.FirstName,
            lastName: decodedToken.LastName,
            email: decodedToken.Email,
            id: decodedToken.Id,
            status: decodedToken.Status
          };
        }
        state.token = token;
      }
    }
  }
});
export const {
  setUserInfo,
  signout,
  setToken,
  updateAction,
  resetAction,
  manageModal,
  refreshAuthToken
} = authSlice.actions;

export default authSlice.reducer;
export const auth = (state: RootState) => state.auth;
