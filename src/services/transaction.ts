import { ITransaction, TransactionList } from "interfaces/Expense";

import axiosInstance from "./axiosInstance";

export const getdata = async (
  userId: string,
  status: number,
  month: number,
  year: number,
  authToken: string
): Promise<TransactionList> => {
  try {
    const headers = {
      Authorization: `Bearer ${authToken}`
    };
    const response = await axiosInstance.get(`Transaction/filter`, {
      headers: headers,
      params: {
        userId,
        status,
        month,
        year
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getStatdata = async (
  userId: string,
  month: number,
  year: number,
  authToken: string
): Promise<any> => {
  try {
    const headers = {
      Authorization: `Bearer ${authToken}`
    };
    const response = await axiosInstance.get(`Transaction/stats`, {
      headers: headers,
      params: {
        userId,
        month,
        year
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const create = async (
  record: ITransaction,
  authToken: string
): Promise<TransactionList> => {
  try {
    const headers = {
      Authorization: `Bearer ${authToken}`
    };
    const response = await axiosInstance.post(`Transaction/create`, record, {
      headers: headers
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const update = async (
  record: ITransaction,
  authToken: string
): Promise<string> => {
  try {
    const headers = {
      Authorization: `Bearer ${authToken}`
    };
    const response = await axiosInstance.put(
      `Transaction/update/${record.id}`,
      record,
      {
        headers: headers
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const remove = async (id: string, authToken: string): Promise<any> => {
  try {
    const response = await axiosInstance.put(
      `Transaction/remove/${id}`,
      {},
      {
        headers: { Authorization: `Bearer ${authToken}` }
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
