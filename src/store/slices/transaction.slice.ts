import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { iTransaction } from "store/types/transaction.types";

type InitialState = {
  transaction: iTransaction;
  transactions: iTransaction[] | [];
  isModalOpen: boolean;
};

const initialState: InitialState = {
  transaction: {},
  transactions: [],
  isModalOpen: false
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    savedTransations: (state, action: PayloadAction<iTransaction[]>) => {
      state.transactions = action.payload;
    },

    savedTransaction: (state, action: PayloadAction<iTransaction>) => {
      state.transaction = action.payload;
    },
    newTransaction: (state, action: PayloadAction<iTransaction>) => {
      state.transaction = action.payload;
    },
    viewModal: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    }
  }
});

export default transactionSlice.reducer;

export const { savedTransaction, savedTransations, newTransaction, viewModal } =
  transactionSlice.actions;
