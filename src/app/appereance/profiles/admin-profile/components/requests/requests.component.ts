import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ann-requests',
  standalone: true,
  imports: [],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestsComponent {

}
