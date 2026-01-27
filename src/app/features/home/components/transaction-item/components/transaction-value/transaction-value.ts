import { Component, input, computed } from "@angular/core";

import { CurrencyPipe } from "@angular/common";
import { TransactionType } from "@shared/transaction/enum/transaction-type";
import { Transaction } from "@shared/transaction/interfaces/transactions";


const CssClasses = {
  [TransactionType.INCOME]: 'income',
  [TransactionType.OUTCOME]: 'outcome'
}

@Component({
  selector: 'app-transaction-value',
  imports: [CurrencyPipe],
  templateUrl: './transaction-value.html',
  // template: '{{transaction().value}}',
  styleUrl: './transaction-value.scss',
  host: {
    '[class]': 'cssClass()',
  }
})
export class TransactionValue {
  transaction = input.required<Transaction>();

  cssClass = computed(() => CssClasses[this.transaction().type]);
}
