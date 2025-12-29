import { Component } from '@angular/core';
import { Balance } from "./components/balance/balance";

@Component({
  selector: 'app-home',
  imports: [Balance],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
