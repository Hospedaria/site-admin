import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IReserva } from '../../models/interfaces/IReserva';
import { environment } from '../../environments/environment';
import { format } from 'date-fns';
import { IReservaGrid } from '../../models/interfaces/IReservaGrid';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.urlBaseApi || 'http://localhost:3000'; // Substitua com sua base URL
  }

  criarReserva(reserva: IReserva): Observable<HttpResponse<IReserva>> {
    const url = `${this.baseUrl}/reservas`;
    return this.http.post<IReserva>(url, reserva, {
      observe: "response"
    });
  }

  consultarReservasAPartirDeHoje(): Observable<IReservaGrid[]> {
    const url = `${this.baseUrl}/reservas/apartirdehoje`;
    return this.http.get<IReservaGrid[]>(url);
  }

  consultarReservasPorPeriodo(dataInicial: Date,
    dataFinal: Date) : Observable<IReservaGrid[]> {
    const datestring: string = format(dataInicial, 'yyyy-MM-dd');
    const dateFinalString: string = format(dataFinal, 'yyyy-MM-dd');

    const url = `${this.baseUrl}/reservas/consultaPorPeriodo?datainicio=${datestring}&datatermino=${dateFinalString}`;
    return this.http.get<IReservaGrid[]>(url);
  }

  obterReserva(id: string): Observable<IReserva> {
    const url = `${this.baseUrl}/reservas/${id}`;
    return this.http.get<IReserva>(url);
  }

  atualizarReserva(id: string, reserva: IReserva): Observable<IReserva> {
    const url = `${this.baseUrl}/reservas/${id}`;
    return this.http.put<IReserva>(url, reserva);
  }

  excluirReserva(id: string): Observable<IReserva> {
    const url = `${this.baseUrl}/reservas/${id}`;
    return this.http.delete<IReserva>(url);
  }
}
