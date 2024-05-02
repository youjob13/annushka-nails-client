import { Injectable, inject } from '@angular/core';
import { TuiDay, TuiTime } from '@taiga-ui/cdk';
import { BehaviorSubject, shareReplay, tap } from 'rxjs';
import * as DTO from '../../../dto';
import { ScheduleHttpService } from './schedule-http.service';
import { AdoptedSchedule } from './schedule.models';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  private readonly scheduleHttpService = inject(ScheduleHttpService);

  private rawSchedule$$: BehaviorSubject<DTO.ISchedule[]> | null = null;
  public rawSchedule$ = this.getSchedule().pipe(shareReplay(1)).subscribe();
  private adoptedSchedule$$ = new BehaviorSubject<AdoptedSchedule>(new Map());
  public adoptedSchedule$ = this.adoptedSchedule$$.asObservable();
  private bookedDates$$ = new BehaviorSubject<Map<TuiDay, TuiTime[]>>(
    new Map()
  );
  public bookedDates$ = this.bookedDates$$.asObservable();

  // private readonly requestInProgress$$ = new BehaviorSubject<boolean>(false);
  // public readonly requestInProgress$ = this.requestInProgress$$.asObservable();

  public getSchedule() {
    if (!this.rawSchedule$$) {
      return this.scheduleHttpService.getSchedule().pipe(
        tap((schedule) => {
          this.rawSchedule$$ = new BehaviorSubject<DTO.ISchedule[]>(schedule);
        }),
        tap((schedule) =>
          this.adoptedSchedule$$.next(this.getAdoptedSchedule(schedule))
        ),
        tap((schedule) =>
          this.bookedDates$$.next(this.getBookedDates(schedule))
        ),
        shareReplay(1)
      );
    }

    return this.rawSchedule$$;
  }

  private getBookedDates(schedule: DTO.ISchedule[]): Map<TuiDay, TuiTime[]> {
    return schedule.reduce<Map<TuiDay, TuiTime[]>>(
      (map, { timestamp, isBooked }) => {
        if (isBooked) {
          const { day: tuiDay, time } = this.getTuiDayTime(timestamp);
          return this.adaptDates(map, tuiDay, time);
        }
        return map;
      },
      new Map()
    );
  }

  private getAdoptedSchedule(schedule: DTO.ISchedule[]): AdoptedSchedule {
    return schedule.reduce<AdoptedSchedule>((map, { timestamp, isBooked }) => {
      const { day, time } = this.getTuiDayTime(timestamp);
      const data = { time, isBooked: !!isBooked };
      return this.adaptDates(map, day, data.time);
    }, new Map());
  }

  private getTuiDayTime(timestamp: number) {
    const date = new Date(timestamp);
    const day = date.getDate();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const month = date.getMonth();
    const year = date.getFullYear();

    const tuiDay = new TuiDay(year, month, day);

    return { day: tuiDay, time: new TuiTime(hours, minutes) };
  }

  private adaptDates<TMap extends Map<unknown, unknown[]>>(
    map: TMap,
    tuiDay: TuiDay,
    time: TuiTime
  ) {
    if (map.has(tuiDay)) {
      map.get(tuiDay)!.push(time);
    } else {
      map.set(tuiDay, [time]);
    }

    return map;
  }
}
