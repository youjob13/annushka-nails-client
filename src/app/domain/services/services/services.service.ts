import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, finalize, tap } from 'rxjs';
import { ServicesHttpService } from './services-http.service';

import * as DTO from '../../../dto';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private readonly servicesHttpService = inject(ServicesHttpService);

  private services$$ = new BehaviorSubject<DTO.IService[]>([]);
  public services$: Observable<DTO.IService[]> | null = null;

  private readonly requestInProgress$$ = new BehaviorSubject<boolean>(false);
  public readonly requestInProgress$ = this.requestInProgress$$.asObservable();

  public getServices() {
    if (!this.services$) {
      this.services$ = this.services$$.asObservable();
      this.servicesHttpService
        .getServices()
        .pipe(
          tap((services) => {
            this.services$$.next(services);
          })
        )
        .subscribe();
    }

    return this.services$;
  }

  public saveServices(data: DTO.IService[]) {
    return this.servicesHttpService.saveServices(data).pipe(
      tap((services) => {
        this.services$$?.next(services);
      })
    );
  }

  public applyForService<T>(data: T) {
    this.requestInProgress$$.next(true);

    return this.servicesHttpService.applyForService(data).pipe(
      finalize(() => {
        this.requestInProgress$$.next(false);
      })
    );
  }
}
