import { KeyValue } from './../KeyValue';
export enum StatusReserva {
  PreReservado = 0,
  Confirmado = 1,
  Cancelado = 2
}

export const StatusReservaMap: KeyValue<number, string>[] = [
  { key: StatusReserva.PreReservado, value: 'Pré-reservado'},
  { key: StatusReserva.Confirmado, value: 'Confirmado'},
  { key: StatusReserva.Cancelado, value: 'Cancelado'}
];
