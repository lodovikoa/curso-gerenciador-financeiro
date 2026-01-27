import { Routes } from "@angular/router";
import { ListComponent } from "./pages/list/list.component";
import { getTransactionsResolver } from "./pages/list/resolvers/get-transactions-resolver";

export default [
    { path: '', component: ListComponent, resolve: { transactions: getTransactionsResolver } },
] as Routes
