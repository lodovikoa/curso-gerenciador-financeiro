import { TransactionType } from "../enum/transaction-type";
import { Transaction } from "../interfaces/transactions";

export function sumTransactions(transactions: Transaction[], type: TransactionType) {
  return transactions
    .filter((item) => item.type === type)
    .reduce((total, item) => total + item.value, 0);
}
