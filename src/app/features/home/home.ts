import { Component, signal } from '@angular/core';
import { Balance } from "./components/balance/balance";
import { TransactionItem } from "./components/transaction-item/transaction-item";
import { Transaction } from '../../shared/transaction/interfaces/transactions';
import { TransactionType } from '../../shared/transaction/enum/transaction-type';

@Component({
  selector: 'app-home',
  imports: [Balance, TransactionItem],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  transactions = signal<Transaction[]>([
    { title: 'Salario', value: 100, type: TransactionType.INCOME },
    { title: 'VA', value: 50, type: TransactionType.OUTCOME },
    { title: 'Aluguel', value: 100, type: TransactionType.OUTCOME },
    { title: 'Extra', value: 50, type: TransactionType.INCOME },
  ]);

}
