import { IPagamento } from "./IPagamento";

export interface IReserva {
    id?: string;
    email: string;
    telefone: string;
    nome: string;
    qtdAdultos: number;
    qtdCriancas: number;
    checkin: Date;
    checkout: Date;
    status: number;
    valor: number;
    chegada: string;
    suites: number[];
    observacoes?: string | null;
    pagamentos?: IPagamento[];
}
