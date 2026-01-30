import { Component, inject, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink, Router, ActivatedRoute } from "@angular/router";
import { ConfirmationDialogService } from "@shared/dialog/confirmation/services/confirmation-dialog.service";
import { FeedbackService } from "@shared/feedback/services/feedback.service";
import { Transaction } from "@shared/transaction/interfaces/transactions";
import { TransactionsService } from "@shared/transaction/services/transactions.service";
import { NoTransactions } from "./components/no-transactions/no-transactions";
import { TransactionItem } from "./components/transaction-item/transaction-item";
import { TransactionsContainerComponent } from "./components/transactions-container/transactions-container.component";
import { SearchComponent } from "./components/search/search.component";
import { httpResource, HttpParams, HttpResourceRequest } from '@angular/common/http';

@Component({
  selector: 'app-list',
  imports: [TransactionItem, NoTransactions, MatButtonModule, RouterLink, TransactionsContainerComponent, SearchComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {

  private transactionsService = inject(TransactionsService);
  private router = inject(Router);
  private feedbackService = inject(FeedbackService);
  private confirmationDialogService = inject(ConfirmationDialogService);
  private activatedRoute = inject(ActivatedRoute);


  // transactions = input.required<Transaction[]>();
  // items = linkedSignal(() => this.transactions());

  searchTerm = signal('');

  resourceRef = httpResource<Transaction[]>(() => {
    let httpParams = new HttpParams();

    if (this.searchTerm()) {
      httpParams = httpParams.append('q', this.searchTerm());
    }
    return {
      url: '/api/transactions',
      params: httpParams,
    } as HttpResourceRequest;
  }, {
    defaultValue: []
   });

  edit(transaction: Transaction) {
    this.router.navigate(['edit', transaction.id], { relativeTo: this.activatedRoute });
  }

  remove(transaction: Transaction) {
    this.confirmationDialogService.open({
      title: 'Excluir Transação',
      message: 'Confirma excluir transação?',
      yesBtnText: 'SIM',
      noBtnText: 'NÃO'
    })
    .subscribe({
      next:() => {
        this.transactionsService.delete(transaction.id).subscribe({
          next: () => {
            this.removeTransaction(transaction);
            this.feedbackService.success("Transação removida com sucesso!");
          }
        });
      }
    })

  }

  private removeTransaction(transaction: Transaction) {
    this.resourceRef.update((t) => t.filter(item => item.id !== transaction.id));
  }

}
