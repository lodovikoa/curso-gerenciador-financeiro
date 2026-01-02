import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TransactionType } from '../../../../shared/transaction/enum/transaction-type';
import { NgxMaskDirective } from "ngx-mask";
import { JsonPipe } from '@angular/common';
import { TransactionsService } from '../../../../shared/transaction/services/transactions.service';
import { TransactionPayload } from '../../../../shared/transaction/interfaces/transactions';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create',
  imports: [MatFormFieldModule,
            MatInputModule,
            ReactiveFormsModule,
            MatButtonModule,
            MatButtonToggleModule,
            NgxMaskDirective,
            JsonPipe],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {

  private transactionsService = inject(TransactionsService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  readonly transactionType = TransactionType;

  form = new FormGroup({
    type:  new FormControl('', { validators: [Validators.required] }),
    title: new FormControl('', { validators: [Validators.required] }),
    value: new FormControl(0, { validators: [Validators.required] })
   });

   submit() {
    if(this.form.invalid) {
      return;
    }

    const payload: TransactionPayload = {
      title: this.form.value.title as string,
      type: this.form.value.type as TransactionType,
      value: this.form.value.value as number
    }

    this.transactionsService.post(payload).subscribe({
      next: () => {
        this.snackBar.open('Transação criada com sucesso.', 'OK', {
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
        this.router.navigate(['/']);
      }
    });
   }

}
