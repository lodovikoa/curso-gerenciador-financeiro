import { TransactionType } from "../enum/transaction-type";

export interface Transaction {
  title: string;
  value: number;
  type: TransactionType;
}
