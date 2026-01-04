import { Component } from "@angular/core";
import { ɵEmptyOutletComponent } from "@angular/router";
import { Header } from "./components/header/header";

@Component({
  selector: 'app-layout',
  imports: [Header, ɵEmptyOutletComponent],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
