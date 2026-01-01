import { CreateComponent } from './pages/create/create.component';
import { Routes } from "@angular/router";
import { Home } from "./home";

export default [
    { path: '', component: Home },
    { path: 'create', component: CreateComponent }
] as Routes
