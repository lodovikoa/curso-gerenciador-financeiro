import { Component, inject, OnInit, signal } from '@angular/core';
import { Balance } from "./components/balance/balance";
import { TransactionItem } from "./components/transaction-item/transaction-item";
import { Transaction } from '../../shared/transaction/interfaces/transactions';
import { NoTransactions } from "./components/no-transactions/no-transactions";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [Balance, TransactionItem, NoTransactions],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  private httpClient = inject(HttpClient);

  transactions = signal<Transaction[]>([]);

  ngOnInit(): void {
    this.getTransactions();
  }

  private getTransactions() {
    this.httpClient
      .get<Transaction[]>('http://localhost:3000/transactions')
      .subscribe((transactions) => {
        this.transactions.set(transactions);
      });
  }
}
