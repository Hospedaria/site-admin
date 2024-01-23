import { Component, OnInit } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {
  MatDialog
} from '@angular/material/dialog';


import { IReserva } from '../../../models/interfaces/IReserva';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { ExcluirReservaDialogComponent } from '../excluir-reserva-dialog/excluir-reserva-dialog.component';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [MatCardModule, MatIcon, MatChipsModule, MatButtonModule,
    MatMenuModule],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css',
  providers: [DatePipe, CurrencyPipe]
})
export class ReservasComponent implements OnInit {

  public reservas: IReserva[] = [];

  constructor(private datePipe: DatePipe,
    private currencyPipe: CurrencyPipe,
    private router: Router,
    public matDialog: MatDialog){}

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
        suites: ['Chalé', 'Azul']
      });

      this.reservas.push(
        {
          id: 2,
          nome: 'Pedro Henrique',
          checkin: new Date(),
          checkout: new Date(),
          chegada: '12:00',
          qtdAdultos: 2,
          qtdCriancas: 0,
          status: 'Confirmado',
          valor: 300,
          suites: ['Vermelha']
        });
  }

  abrirExcluirReserva(id: number): void {
    const ref = this.matDialog.open(ExcluirReservaDialogComponent, {
      data: id
    });

    ref.afterClosed().subscribe((deveExcluir)=>{
      if (deveExcluir)
      {
        let index = this.reservas.findIndex(c => c.id == id);
        this.reservas.splice(index,1);
      }
    });
  }

  editarReserva(id: number) : void {
    this.router.navigate([`reservas/editar/${id}`]);
  }

  corChipDoChale(suite: string): string {
    switch(suite){
      case 'Amarela': return 'warning';
      case 'Azul': return 'primary';
      case 'Verde': return 'success';
      case 'Vermelha': return 'danger';
      case 'Chalé': return 'dark';
    }
    return '';
  }
}
