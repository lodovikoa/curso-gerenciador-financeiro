import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TransactionType } from '../../../../shared/transaction/enum/transaction-type';

@Component({
  selector: 'app-create',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule, MatButtonToggleModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {

  readonly transactionType = TransactionType;

  form = new FormGroup({
    type:  new FormControl('', { validators: [Validators.required] }),
    title: new FormControl('', { validators: [Validators.required] }),
    value: new FormControl('', { validators: [Validators.required] })
   });

}
