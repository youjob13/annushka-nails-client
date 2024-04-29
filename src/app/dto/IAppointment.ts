export interface IAppointment {
  id: string;
  // date: '2021-10-10',
  // time: '10:00',
  timestamp: number;
  master: {
    name: string;
    avatar?: string;
  };
  service: {
    name: string;
    price: number;
  };
}
