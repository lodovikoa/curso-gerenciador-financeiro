import { Routes } from "@angular/router";
import { ListComponent } from "./list.component";
import { getTransactionsResolver } from "./resolvers/get-transactions-resolver";

export default [
    { path: '', component: ListComponent, resolve: { transactions: getTransactionsResolver } },
] as Routes
