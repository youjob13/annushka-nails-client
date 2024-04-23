import { Injectable, inject } from '@angular/core';
import { ApiHttpService } from '../api-http.service';

import * as DTO from '../../../dto';

@Injectable({
  providedIn: 'root',
})
export class ServicesHttpService {
  private readonly apiHttpService = inject(ApiHttpService);

  public getServices() {
    return this.apiHttpService.get<DTO.IService[]>('/services');
  }

  public applyForService<T>(data: T) {
    return this.apiHttpService.post('/services/apply', data);
  }
}
