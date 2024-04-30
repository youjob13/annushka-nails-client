import { TuiDay } from '@taiga-ui/cdk';

export const isDayAvailableForApplying = (
  dateTimeMap: Map<TuiDay['day'], string[]>,
  day: TuiDay['day']
): boolean => {
  return dateTimeMap.has(day);
};
