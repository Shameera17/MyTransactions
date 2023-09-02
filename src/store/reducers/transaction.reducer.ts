import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TransactionList } from "interfaces/Expense";
import { ITransactionType } from "interfaces/User";
import { iTransaction } from "store/types/transaction.types";

type InitialState = {
  transaction: iTransaction;
  transactions: TransactionList | [];
  isModalOpen: boolean;
  transactionTypes: ITransactionType[] | [];
  filterCriteria: {
    status: number;
    month: number;
    year: number;
  };
  refresh: boolean;
};

const initialState: InitialState = {
  transaction: {},
  transactions: [],
  isModalOpen: false,
  transactionTypes: [],
  filterCriteria: {
    status: 1,
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  },
  refresh: false
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
    },
    setFilterCriteria: (
      state,
      action: PayloadAction<{
        userId?: string;
        month?: number;
        year?: number;
      }>
    ) => {
      if (action.payload.month) {
        state.filterCriteria.month = action.payload.month;
      }
      if (action.payload.year) {
        state.filterCriteria.year = action.payload.year;
      }
    },

    refresh: state => {
      state.refresh = !state.refresh;
    }
  }
});

export default transactionSlice.reducer;

export const {
  savedTransaction,
  setTransactionTypes,
  savedTransations,
  newTransaction,
  viewModal,
  setFilterCriteria,
  refresh
} = transactionSlice.actions;
