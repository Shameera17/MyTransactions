import { ITransactionType } from "interfaces/User";

import axiosInstance from "./axiosInstance";

export const getTransactionTypes = async (): Promise<ITransactionType[]> => {
  try {
    const response = await axiosInstance.get("TransactionType");
    return response.data;
  } catch (error) {
    throw error;
  }
};
