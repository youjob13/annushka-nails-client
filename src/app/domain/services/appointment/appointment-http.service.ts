import { Injectable, inject } from '@angular/core';
import { IAppointment } from '../../../dto';
import { ApiHttpService } from '../api-http.service';

@Injectable({
  providedIn: 'root',
})
export class AppointmentHttpService {
  private readonly apiHttp = inject(ApiHttpService);

  public getAppointments(masterId: string) {
    return this.apiHttp.get<IAppointment[]>(`/appointments/${masterId}`);
  }

  public declineAppointment(masterId: string, appointmentId: string) {
    return this.apiHttp.delete(
      `/appointments/${masterId}/decline/${appointmentId}`
    );
  }
}
