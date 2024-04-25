import { Injectable, inject } from '@angular/core';
import { ApiHttpService } from '../api-http.service';

import { of } from 'rxjs';
import * as DTO from '../../../dto';

@Injectable({
  providedIn: 'root',
})
export class ServicesHttpService {
  private readonly apiHttpService = inject(ApiHttpService);

  public getServices() {
    return of([
      {
        id: '1',
        name: 'Base manicure',
        price: 25,
        description: 'Base manicure description',
      },
      {
        id: '2',
        name: 'Professional manicure',
        price: 40,
        description: 'Our masters will make your nails perfect!',
      },
      {
        id: '3',
        name: 'Super manicure',
        price: 60,
        description: 'The best option for the most demanding customers!',
      },
      {
        id: '4',
        name: 'Ultra manicure',
        price: 80,
        description: 'The most-suitable option!',
      },
    ] as DTO.IService[]);
    // return this.apiHttpService.get<DTO.IService[]>('/services');
  }

  public applyForService<T>(data: T) {
    return this.apiHttpService.post('/services/apply', data);
  }
}
