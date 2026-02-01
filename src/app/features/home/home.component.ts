import { Component, computed, input } from "@angular/core";
import { Transaction } from "@shared/transaction/interfaces/transactions";
import { Balance } from "./components/balance/balance";
import { PieChartComponent } from "./components/pie-chart/pie-chart.component";
import { PieChartConfig } from "./components/pie-chart/pie-chart-config.interface";
import { TransactionType } from "@shared/transaction/enum/transaction-type";

@Component({
  selector: 'app-home',
  imports: [Balance, PieChartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  transactions = input.required<Transaction[]>();

  totalIncomes = computed(() => {
   return this.transactions()
    .filter(item => item.type === TransactionType.INCOME)
    .reduce((total, item) => total + item.value, 0)

  });

  totalOutcomes = computed(() => {
   return this.transactions()
    .filter(item => item.type === TransactionType.OUTCOME)
    .reduce((total, item) => total + item.value, 0)

  });


  chartConfig = computed<PieChartConfig>( () => ({
    labels: ['Ganhos', 'Gastos'],
    dataLabel: 'Valor total',
    data: [this.totalIncomes(),this.totalOutcomes()]
  }));

}
