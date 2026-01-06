import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-login',
  imports: [MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  submit() {
    throw new Error('Method not implemented.');
  }

  form = new FormGroup({
    user:     new FormControl('', { validators: [Validators.required] }),
    password: new FormControl('', { validators: [Validators.required] }),
  });

}
