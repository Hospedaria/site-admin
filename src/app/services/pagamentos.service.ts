import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IPagamento } from '../../models/interfaces/IPagamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagamentosService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.urlBaseApi || 'http://localhost:3000'; // Substitua com sua base URL
  }

  criarPagamento(pagamento: IPagamento): Observable<HttpResponse<IPagamento>> {
    const url = `${this.baseUrl}/reservas/${pagamento.idReserva}/pagamentos`;
    return this.http.post<IPagamento>(url, pagamento, {
      observe: "response"
    });
  }

  deletarPagamento(idReserva: string, idPagamento: string): Observable<IPagamento> {
    const url = `${this.baseUrl}/reservas/${idReserva}/pagamentos/${idPagamento}`;
    return this.http.delete<IPagamento>(url);
  }
}
