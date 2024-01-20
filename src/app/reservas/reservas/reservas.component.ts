import { Component, OnInit } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

import { IReserva } from '../../../models/IReserva';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent implements OnInit {

  public reservas: IReserva[] = [];

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
        valor: 300
      });
  }
}
