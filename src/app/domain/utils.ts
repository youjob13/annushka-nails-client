import { TuiDay, TuiTime } from '@taiga-ui/cdk';

export const isDayAvailableForApplying = (
  dateTimeMap: Map<TuiDay['day'] | string, string[]>,
  day: TuiDay['day']
): boolean => {
  return dateTimeMap.has(day);
};

export const isDayBooked = (
  dateTimeMap: Map<string, TuiTime[]> | null,
  day: string
): boolean => {
  if (!dateTimeMap) {
    return false;
  }
  console.log(dateTimeMap, day, dateTimeMap.has(day));
  return dateTimeMap.has(day);
};
