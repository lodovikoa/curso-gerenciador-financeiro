import { Component, input, computed } from "@angular/core";
import { BalanceCard } from "./components/balance-card/balance-card";
import { Transaction } from "@shared/transaction/interfaces/transactions";
import { sumTransactions } from "@shared/transaction/functions/sum-transactions";
import { TransactionType } from "@shared/transaction/enum/transaction-type";

@Component({
  selector: 'app-balance',
  imports: [BalanceCard],
  templateUrl: './balance.html',
  styleUrl: './balance.scss',
})
export class Balance {
  transactions = input.required<Transaction[]>();

  totalIncomes = computed(() => {
     return sumTransactions(this.transactions(), TransactionType.INCOME);
  });

  totalOutcomes = computed(() => {
     return sumTransactions(this.transactions(), TransactionType.OUTCOME);
  });

  balance = computed(() => {
    return this.totalIncomes() - this.totalOutcomes();
  });
}
