import { ILogin, IUser } from "interfaces/User";
import { IUserInfo } from "store/types/interfaces";

import axiosInstance from "./axiosInstance";

export const login = async (
  credentials: ILogin
): Promise<{ token: string; user: IUserInfo }> => {
  try {
    const response = await axiosInstance.post("Auth/login", credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const register = async (userData: IUser): Promise<any> => {
  try {
    const response = await axiosInstance.post("Auth/register", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const forgotPassword = async (credentials: ILogin): Promise<any> => {
  try {
    const response = await axiosInstance.post(
      "Auth/forgotPassword",
      credentials
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const isUserExist = async (email: string): Promise<any> => {
  try {
    const response = await axiosInstance.get("User", {
      params: { email }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
