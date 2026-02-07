import { Component, input, computed, ChangeDetectionStrategy } from "@angular/core";
import { TransactionType } from "../../../../../../../../shared/transaction/enum/transaction-type";
import { Transaction } from "../../../../../../../../shared/transaction/interfaces/transactions";
import { CurrencyPipe } from "@angular/common";


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
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'cssClass()',
  }
})
export class TransactionValue {
  transaction = input.required<Transaction>();

  cssClass = computed(() => CssClasses[this.transaction().type]);
}
