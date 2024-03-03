import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IReservaGrid } from '../../models/interfaces/IReservaGrid';
import { format } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class ExportarReservasService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.urlBaseApi || 'http://localhost:3000'; // Substitua com sua base URL
  }

  exportarReservas(dataReferencia: Date): Observable<string> {
    const dataRefString = format(dataReferencia, 'yyyy-MM-dd');

    const url = `${this.baseUrl}/exportar/reservas?dataReferencia=${dataRefString}`;
    return this.http.get<string>(url);
  }
}
