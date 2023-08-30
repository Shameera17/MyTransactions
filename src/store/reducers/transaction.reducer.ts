import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TransactionList } from "interfaces/Expense";
import { ITransactionType } from "interfaces/User";
import { iTransaction } from "store/types/transaction.types";

type InitialState = {
  transaction: iTransaction;
  transactions: TransactionList | [];
  isModalOpen: boolean;
  transactionTypes: ITransactionType[] | [];
};

const initialState: InitialState = {
  transaction: {},
  transactions: [],
  isModalOpen: false,
  transactionTypes: []
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    savedTransations: (state, action: PayloadAction<TransactionList>) => {
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
    },
    setTransactionTypes: (state, action: PayloadAction<ITransactionType[]>) => {
      state.transactionTypes = action.payload;
    }
  }
});

export default transactionSlice.reducer;

export const {
  savedTransaction,
  setTransactionTypes,
  savedTransations,
  newTransaction,
  viewModal
} = transactionSlice.actions;
