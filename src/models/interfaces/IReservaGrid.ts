import { IReserva } from "./IReserva";

export interface IReservaGrid {
  data: Date;
  reservas: IReserva[];
  urlExportar: string;
}
