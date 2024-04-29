import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, finalize, shareReplay, tap } from 'rxjs';
import { ServicesHttpService } from './services-http.service';

import * as DTO from '../../../dto';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private readonly servicesHttpService = inject(ServicesHttpService);

  private services$$: BehaviorSubject<DTO.IService[]> | null = null;
  public services$ = this.getServices();

  private readonly requestInProgress$$ = new BehaviorSubject<boolean>(false);
  public readonly requestInProgress$ = this.requestInProgress$$.asObservable();

  public getServices() {
    if (!this.services$$) {
      return this.servicesHttpService.getServices().pipe(
        tap((services) => {
          this.services$$ = new BehaviorSubject<DTO.IService[]>(services);
        }),
        shareReplay(1)
      );
    }

    return this.services$$;
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
