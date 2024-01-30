import { KeyValue } from './../KeyValue';
export enum StatusReserva {
  PreReservado = 1,
  Confirmado = 2,
  Cancelado = 3
}

export const StatusReservaMap: KeyValue<number, string>[] = [
  { key: StatusReserva.PreReservado, value: 'Pré-reservado'},
  { key: StatusReserva.Confirmado, value: 'Confirmado'},
  { key: StatusReserva.Cancelado, value: 'Cancelado'}
];
