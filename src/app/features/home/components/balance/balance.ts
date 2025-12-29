import { Component } from '@angular/core';
import { BalanceCard } from "./components/balance-card/balance-card";

@Component({
  selector: 'app-balance',
  imports: [BalanceCard],
  templateUrl: './balance.html',
  styleUrl: './balance.scss',
})
export class Balance {

}
