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
import { SuitesMap } from '../../../models/enums/Suites';
import { ReservaService } from '../../services/reserva.service';
import { LoadingService } from '../../services/loading.service';
import { StatusReservaMap } from '../../../models/enums/StatusReserva';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css',
  providers: [DatePipe, CurrencyPipe]
})
export class ReservasComponent implements OnInit {

  public reservas: IReserva[] = [];
  range = new FormGroup({
    start: new FormControl<Date>(new Date()),
    end: new FormControl<Date>(new Date()),
  });

  constructor(private datePipe: DatePipe,
    private currencyPipe: CurrencyPipe,
    private router: Router,
    public matDialog: MatDialog,
    private reservaservice: ReservaService,
    private loadingService: LoadingService){}

  public buscaValorReservaFormatoTela(valor: number) : string | null{
    return this.currencyPipe.transform(valor, 'BRL');
  }

  public buscaDataFormatoTela(data: Date): string | null {
    return this.datePipe.transform(data, 'd MMM y');
  }

  ngOnInit(): void {
    this.loadingService.show();
    this.reservaservice
      .consultarReservasAPartirDeHoje()
      .subscribe({
        next: (r) => this.reservas = r,
      })
      .add(()=> this.loadingService.hide());
  }

  public pesquisarReservas() {

    this.loadingService.show();
    this.reservaservice.consultarReservasPorPeriodo(
      this.range.get('start')?.value as Date,
      this.range.get('end')?.value as Date
    ).subscribe((result) => {
      this.reservas = result;
    })
    .add(() => {
      this.loadingService.hide();
    });
  }

  abrirExcluirReserva(id: string | undefined): void {
    if (!id)
      return;

    const ref = this.matDialog.open(ExcluirReservaDialogComponent, {
      data: id
    });

    ref.afterClosed().subscribe((deveExcluir)=>{
      if (deveExcluir)
      {
        this.loadingService.show();

        this.reservaservice.excluirReserva(id)
          .subscribe({
            next: () => {
              let index = this.reservas.findIndex(c => c.id == id);
              this.reservas.splice(index,1);
            }
          })
        .add(()=>{
          this.loadingService.hide();
        });
      }
    });
  }

  editarReserva(id: string | undefined) : void {
    if (!id)
      this.router.navigate(['reservas']);
    this.router.navigate([`reservas/editar/${id}`]);
  }

  getDescricaoStatus(status: number) : string {
    return StatusReservaMap.find(c => c.key == status)?.value || '';
  }

  getDescricaoChipChale(suiteId: number) : string {
    return SuitesMap.find(c => c.key == suiteId)?.value || '';
  }

  corChipDoChale(suiteId: number): string {
    switch(suiteId){
      case 1: return 'warning';
      case 2: return 'danger';
      case 3: return 'primary';
      case 4: return 'success';
      case 5: return 'dark';
    }
    return '';
  }
}
