import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TuiAlertService } from '@taiga-ui/core';
import { take, tap } from 'rxjs';

export const httpAlertInterceptor: HttpInterceptorFn = (req, next) => {
  const tuiAlertService = inject(TuiAlertService);

  return next(req).pipe(
    tap(() => {
      tuiAlertService.open('Request received!').pipe(take(1)).subscribe();
    })
  );
};
