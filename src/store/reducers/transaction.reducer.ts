import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICreatedTransaction, TransactionList } from "interfaces/Expense";
import { ITransactionType } from "interfaces/User";

type InitialState = {
  transactions: TransactionList | [];
  isModalOpen: {
    flag: boolean;
    // below properties need for edit
    mode: "edit" | undefined;
    record: ICreatedTransaction | undefined;
  };
  transactionTypes: ITransactionType[] | [];
  filterCriteria: {
    status: number;
    month: number;
    year: number;
  };
  refresh: boolean;
};

const initialState: InitialState = {
  transactions: [],
  isModalOpen: {
    flag: false,
    mode: undefined,
    record: undefined
  },
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

    editTransaction: (state, action: PayloadAction<ICreatedTransaction>) => {
      state.isModalOpen = { flag: true, mode: "edit", record: action.payload };
    },

    viewModal: (state, action: PayloadAction<boolean>) => {
      if (state.isModalOpen.mode === "edit") {
        state.isModalOpen = { flag: false, mode: undefined, record: undefined };
      } else {
        state.isModalOpen.flag = action.payload;
      }
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
  editTransaction,
  setTransactionTypes,
  savedTransations,
  viewModal,
  setFilterCriteria,
  refresh
} = transactionSlice.actions;
