import { NgTemplateOutlet } from "@angular/common";
import { Component, input, contentChild, TemplateRef, ChangeDetectionStrategy } from "@angular/core";
import { Transaction } from "../../../../../../shared/transaction/interfaces/transactions";

@Component({
  selector: 'app-transactions-container',
  imports: [NgTemplateOutlet],
  templateUrl: './transactions-container.component.html',
  styleUrl: './transactions-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsContainerComponent {

  transactions = input.required<Transaction[]>();
  itemTemplate = contentChild.required<TemplateRef<unknown>>('item');
  noItemsTemplate = contentChild.required<TemplateRef<unknown>>('noItems');

}
