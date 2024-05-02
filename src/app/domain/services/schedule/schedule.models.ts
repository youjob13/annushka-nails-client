import { TuiDay, TuiTime } from "@taiga-ui/cdk";

export type AdoptedSchedule = Map<TuiDay, { time: TuiTime; isBooked: boolean }[]>;
