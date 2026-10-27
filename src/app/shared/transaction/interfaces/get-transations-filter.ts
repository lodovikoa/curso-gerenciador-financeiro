import { TransactionType } from "../enum/transaction-type";

export interface getTransactionsFilter{
  type: TransactionType | 'all';
   search: string
  }
