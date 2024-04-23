import { TuiNotificationT } from '@taiga-ui/core';

export const mapHttpStatusToTuiStatus = (status: number): TuiNotificationT => {
  switch (true) {
    case status >= 200 && status < 300:
      return 'success';
    case status >= 300 && status < 400:
      return 'info';
    case status >= 400 && status < 500:
      return 'error';
    default:
      return 'info';
  }
};
