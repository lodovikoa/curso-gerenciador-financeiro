import { Component, input } from "@angular/core";
import { Transaction } from "@shared/transaction/interfaces/transactions";
import { Balance } from "./components/balance/balance";
import { PieChartComponent } from "./components/pie-chart/pie-chart.component";

@Component({
  selector: 'app-home',
  imports: [Balance, PieChartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  transactions = input.required<Transaction[]>();

}
