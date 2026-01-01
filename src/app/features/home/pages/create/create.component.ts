import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-create',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {

  form = new FormGroup({
    title: new FormControl('', { validators: [Validators.required] }),
    value: new FormControl('', { validators: [Validators.required] })
   });

}
