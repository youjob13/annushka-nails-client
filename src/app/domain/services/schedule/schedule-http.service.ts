import { Injectable, inject } from '@angular/core';

import * as DTO from '../../../dto';
import { ApiHttpService } from '../api-http.service';

@Injectable({
  providedIn: 'root',
})
export class ScheduleHttpService {
  private readonly apiHttpService = inject(ApiHttpService);

  public getSchedule() {
    return this.apiHttpService.get<DTO.ISchedule[]>('/schedule');
  }
}
