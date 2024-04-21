import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ann-social-media',
  standalone: true,
  imports: [],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialMediaComponent {}
