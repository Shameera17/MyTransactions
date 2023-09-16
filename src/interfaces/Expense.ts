export interface IType {
  id?: string;
  name: string;
  code: string;
}
export type ITypes = IType[];

export interface ITransaction {
  id?: string;
  name?: string;
  description: string;
  amount: number;
  userId: string;
  transactionTypeId: string;
  createdDate: string;
}

export interface ICreatedTransaction {
  id: string;
  transactionId: string;
  name: string;
  description: string;
  amount: number;
  createdDate: string;
  type: IType;
}

export type TransactionList = ICreatedTransaction[];
export interface IStat {
  totalIncome: number;
  incomeCount: number;
  totalExpenses: number;
  expenseCount: number;
  previousIncomes: number;
  previousIncomeCount: number;
  RemainingBalance: number;
}
