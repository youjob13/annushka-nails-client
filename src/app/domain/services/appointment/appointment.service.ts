import { Injectable, inject } from '@angular/core';
import { EMPTY, ReplaySubject, filter, map, switchMap, take, tap } from 'rxjs';
import { IAppointment } from '../../../dto';
import { AppointmentHttpService } from './appointment-http.service';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private readonly appointmentHttp = inject(AppointmentHttpService);
  public appointments$: ReplaySubject<IAppointment[]> | null = null;

  public getAppointments(masterId: string) {
    if (!this.appointments$) {
      this.appointments$ = new ReplaySubject<IAppointment[]>(1);
      this.appointmentHttp
        .getAppointments(masterId)
        .pipe(tap((appointments) => this.appointments$?.next(appointments)))
        .subscribe();
    }
    return this.appointments$.asObservable();
  }

  public getAppointment(appointmentId: IAppointment['id']) {
    return this.appointments$?.pipe(
      filter(
        (appointments) => !!appointments.find(({ id }) => id === appointmentId)
      ),
      map((appointments) => appointments[0])
    );
  }

  public declineAppointment(masterId: string, appointmentId: string) {
    return this.appointmentHttp
      .declineAppointment(masterId, appointmentId)
      .pipe(
        switchMap(() => this.appointments$ || EMPTY),
        take(1),
        map((appointments) =>
          appointments.filter(({ id }) => id !== appointmentId)
        ),
        tap((appointments) => this.appointments$?.next(appointments))
      );
  }
}
