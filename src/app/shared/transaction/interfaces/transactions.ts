import { TransactionType } from "../enum/transaction-type";

export interface Transaction {
  id: number;
  title: string;
  value: number;
  type: TransactionType;
}
