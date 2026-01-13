import { Injectable, inject } from '@angular/core';
import { UserCredentials } from '../interfaces/user-credentials';
import { AuthService } from '../services/auth.service';
import { pipe, switchMap, tap } from 'rxjs';
import { AuthTokenStorageService } from '../services/auth-token-storage.service';
import { LoggedInUserStoreService } from '../stores/logged-in-user-store.service';
import { AuthTokenResponse } from '../interfaces/auth-token-response';

@Injectable({
  providedIn: 'root',
})
export class LoginFacadeService {

  private readonly authService = inject(AuthService);
  private readonly authTokenStorageService = inject(AuthTokenStorageService);
  private readonly loggedInUserStoreService = inject(LoggedInUserStoreService);

  login(userCredencials: UserCredentials) {
    return this.authService.login(userCredencials).pipe( this.createUserSession() );
  }

  refreshToken(token: string) {
    return this.authService.refreshToken(token).pipe( //this.createUserSession());
      tap((res) => this.authTokenStorageService.set(res.token())),        // Verificar porque precisa de () em token()
      switchMap((res) => this.authService.getCurrentUser(res.token())),   // Verificar porque precisa de () em token()
      tap(user => this.loggedInUserStoreService.setUser(user))
    );
  }

  private createUserSession() {
    return pipe(
      tap((res: AuthTokenResponse) => this.authTokenStorageService.set(res.token)),
      switchMap((res) => this.authService.getCurrentUser(res.token)),
      tap(user => this.loggedInUserStoreService.setUser(user)),
    );
  }

}
