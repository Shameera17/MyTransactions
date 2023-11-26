export interface iTransaction {
  id?: number;
  type?: "Expense" | "Income";
  amount?: number;
  date?: Date;
  description?: string;
}
