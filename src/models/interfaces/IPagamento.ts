export interface IPagamento {
  idReserva: string;
  idPagamento?: string;
  valor: number;
  data: Date;
  descricao: string;
}
