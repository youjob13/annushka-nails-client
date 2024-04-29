import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ann-favorite-masters',
  standalone: true,
  imports: [],
  templateUrl: './favorite-masters.component.html',
  styleUrl: './favorite-masters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteMastersComponent {}
