import { Component, inject } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MobileLayoutService } from '@core/layout/services/mobile-layout.service';
import { SidenavVisibilityStore } from '@core/layout/stores/sidenav-visibility.store';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly sidenavVisibilityStore = inject(SidenavVisibilityStore);
  private readonly mobileLayoutService = inject(MobileLayoutService);

  toggleSidenavVisibility() {
    this.sidenavVisibilityStore.toggle();
  }

  isMobile = this.mobileLayoutService.isMobile();
}
