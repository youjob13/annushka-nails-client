import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TuiAlertService } from '@taiga-ui/core';
import { take, tap } from 'rxjs';
import { mapHttpStatusToTuiStatus } from '../../common/utils';

const ROUTES_TO_INTERCEPT = new Set(['/services/apply']);

export const httpAlertInterceptor: HttpInterceptorFn = (req, next) => {
  if (!ROUTES_TO_INTERCEPT.has(req.url)) {
    return next(req);
  }

  const tuiAlertService = inject(TuiAlertService);

  return next(req).pipe(
    tap((res) => {
      if (res.type === HttpEventType.Response) {
        const content =
          typeof res.body === 'string'
            ? res.body
            : 'Request has been successfully processed';

        tuiAlertService
          .open(content, {
            status: mapHttpStatusToTuiStatus(res.status),
            // data: 'asdasdasd',
          })
          .pipe(take(1))
          .subscribe();
      }
    })
  );
};
