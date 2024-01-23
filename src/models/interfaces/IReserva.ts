export interface IReserva {
    id: number;
    email: string;
    telefone: string;
    nome: string;
    qtdAdultos: number;
    qtdCriancas: number;
    checkin: Date;
    checkout: Date;
    status: string;
    valor: number;
    chegada: string;
    suites: string[];
    observacoes?: string | null;
}
