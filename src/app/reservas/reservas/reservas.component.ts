import { Component, OnInit } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

import { IReserva } from '../../../models/interfaces/IReserva';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [MatCardModule, MatIcon],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css',
  providers: [DatePipe, CurrencyPipe]
})
export class ReservasComponent implements OnInit {

  public reservas: IReserva[] = [];

  constructor(private datePipe: DatePipe,
    private currencyPipe: CurrencyPipe,
    private router: Router){}

  public buscaValorReservaFormatoTela(valor: number) : string | null{
    return this.currencyPipe.transform(valor, 'BRL');
  }

  public buscaDataFormatoTela(data: Date): string | null {
    return this.datePipe.transform(data, 'd MMM y');
  }

  ngOnInit(): void {
    this.reservas.push(
      {
        id: 1,
        nome: 'Pedro Henrique',
        checkin: new Date(),
        checkout: new Date(),
        chegada: '12:00',
        qtdAdultos: 2,
        qtdCriancas: 0,
        status: 'Confirmado',
        valor: 300,
        suites: []
      });

      this.reservas.push(
        {
          id: 1,
          nome: 'Pedro Henrique',
          checkin: new Date(),
          checkout: new Date(),
          chegada: '12:00',
          qtdAdultos: 2,
          qtdCriancas: 0,
          status: 'Confirmado',
          valor: 300,
          suites: []
        });
  }

  editarReserva(id: number) : void {
    this.router.navigate([`reservas/editar/${id}`]);
  }
}
