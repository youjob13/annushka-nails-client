import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppearanceModule } from './appereance/appereance.module';

@Component({
  selector: 'ann-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, AppearanceModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'annushka-nails-clients';
}
