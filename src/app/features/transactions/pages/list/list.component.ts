import { TransactionType } from '@shared/transaction/enum/transaction-type';
import { ChangeDetectionStrategy, Component, computed, debounced, inject, linkedSignal, Signal, signal } from "@angular/core";
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
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { getTransactionsFilter } from "@shared/transaction/interfaces/get-transations-filter";
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

const TypeFilterOptions = [
  { value: 'all', label: 'Todas' },
  { value: TransactionType.INCOME, label: 'Receitas' },
  { value: TransactionType.OUTCOME, label: 'Despesas' }
];

@Component({
  selector: 'app-list',
  imports: [TransactionItem,
            NoTransactions,
            MatButtonModule,
            RouterLink,
            TransactionsContainerComponent,
            SearchComponent,
            MatProgressBarModule,
            MatInputModule,
            MatSelectModule,
            MatFormFieldModule,
            FormsModule ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {

  private transactionsService = inject(TransactionsService);
  private router = inject(Router);
  private feedbackService = inject(FeedbackService);
  private confirmationDialogService = inject(ConfirmationDialogService);
  private activatedRoute = inject(ActivatedRoute);

  typeFilterOptions = TypeFilterOptions;

  filters = signal<getTransactionsFilter>({
    search: '',
    type: 'all'
  });

  fitersTermWithDebounce = debounced(this.filters, 500);

  private resourceRef = this.transactionsService.getAllWithHttpResource(
    this.fitersTermWithDebounce.value,
  );

  search = linkedSignal(() => this.filters().search, {
    set: (value) => {
      this.filters.update((filters) => {
        return {
          ...filters,
          search: value,
        }
      })
    }
  });

  type = linkedSignal(() => this.filters().type, {
    set: (value) => {
      this.filters.update((filters) => {
        return {
          ...filters,
          type: value,
        }
      })
    }
  });

  transactions = computed(() => this.resourceRef.value());
  isLoading =    computed(() => this.resourceRef.isLoading());

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
