import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MobileLayoutService } from '@core/layout/services/mobile-layout.service';
import { SidenavVisibilityStore } from '@core/layout/stores/sidenav-visibility.store';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-toggle-sidenav-visibility',
  imports: [MatIcon],
  templateUrl: './toggle-sidenav-visibility.component.html',
  styleUrl: './toggle-sidenav-visibility.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleSidenavVisibilityComponent {
  private readonly sidenavVisibilityStore = inject(SidenavVisibilityStore);
  private readonly mobileLayoutService = inject(MobileLayoutService);

  toggleSidenavVisibility() {
    this.sidenavVisibilityStore.toggle();
  }

  isMobile = this.mobileLayoutService.isMobile();
}
