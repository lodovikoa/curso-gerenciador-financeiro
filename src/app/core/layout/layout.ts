import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { RouterOutlet } from "@angular/router";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { SidenavItemsComponent } from './components/sidenav-items/sidenav-items.component';

@Component({
  selector: 'app-layout',
  imports: [Header, RouterOutlet, MatSidenavModule, MatListModule, SidenavItemsComponent],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
}
