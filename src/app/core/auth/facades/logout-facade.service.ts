import { Injectable, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AuthTokenStorageService } from '../services/auth-token-storage.service';
import { tap } from 'rxjs';
import { LoggedInUserStoreService } from '../stores/logged-in-user-store.service';

@Injectable({
  providedIn: 'root',
})
export class LogoutFacadeService {

  private authService = inject(AuthService);
  private authTokenStorageService = inject(AuthTokenStorageService);
  private loggedInUserStoreService = inject(LoggedInUserStoreService);

  logout() {
    console.log('User logged out');
    return this.authService.logout().pipe(
      tap(() => this.authTokenStorageService.remove()),
      tap(() => this.loggedInUserStoreService.logout())
    );
  }

}
