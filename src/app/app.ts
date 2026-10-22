import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush --> OnPush é default, não precisa mais declara-lo
})
export class App {
  protected readonly title = signal('gerenciador-financeiro');
}
