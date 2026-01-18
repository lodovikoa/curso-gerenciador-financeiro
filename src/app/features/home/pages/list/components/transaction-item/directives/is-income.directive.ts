import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from "@angular/core";
import { TransactionType } from "@shared/transaction/enum/transaction-type";

@Directive({
  selector: '[isIncome]',
})
export class IsIncomeDirective {

  private readonly templateRef = inject(TemplateRef);
  private readonly viewContainer = inject(ViewContainerRef);

  transactionType = input.required({
    alias: 'isIncome',
  });

  constructor() {
    effect(() =>{
      if(this.transactionType() === TransactionType.INCOME) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
   }

}
