import { Component, Input, OnInit, inject } from '@angular/core';
import { IPagamento } from '../../../models/interfaces/IPagamento';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirPagamentoDialogComponent } from '../excluir-pagamento-dialog/excluir-pagamento-dialog.component';
import { IExcluirPagamento } from '../../../models/interfaces/IExcluirPagamento';

@Component({
  selector: 'app-lista-pagamentos-reserva',
  templateUrl: './lista-pagamentos-reserva.component.html',
  styleUrl: './lista-pagamentos-reserva.component.css'
})
export class ListaPagamentosReservaComponent implements OnInit {
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  idReserva: string = '';
  matDialog: MatDialog = inject(MatDialog);

  @Input()
  pagamentos: IPagamento[] = [];

  ngOnInit(): void {
    this.idReserva = this.activatedRoute.snapshot.params["id"];
  }

  abrirDialogExcluirReserva(idPagamento: string) : void {
    if (!idPagamento)
      return;

    const excluirPagamento: IExcluirPagamento = {
      idPagamento: idPagamento,
      idReserva: this.idReserva
    };

    const ref = this.matDialog.open(ExcluirPagamentoDialogComponent, {
      data: excluirPagamento
    });

    ref.afterClosed().subscribe((deveExcluir)=>{
      if (deveExcluir)
      {
        const index = this.pagamentos.findIndex((p)=>{
          p.idPagamento == idPagamento &&
          p.idReserva == this.idReserva
        });

        this.pagamentos.splice(index, 1);
      }
    });
  }
}
