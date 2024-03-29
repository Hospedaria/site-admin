import { Component, Input, OnInit, inject } from '@angular/core';
import { IPagamento } from '../../../models/interfaces/IPagamento';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagamentos-reserva',
  templateUrl: './pagamentos-reserva.component.html',
  styleUrl: './pagamentos-reserva.component.css'
})
export class PagamentosReservaComponent implements OnInit {
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  dialogAdicionarPagamento: MatDialog = inject(MatDialog);

  estaRegistrandoPagamento: boolean = false;

  idReserva: string = '';

  @Input()
  totalReserva: number = 0;

  @Input()
  pagamentos?: IPagamento[] = []

  ngOnInit(): void {
    this.idReserva = this.activatedRoute.snapshot.params["id"];
  }

  onAdicionarPagamento() : void{
    this.estaRegistrandoPagamento = true;
  }

  trocaEstaRegistrando(value: boolean) {
    this.estaRegistrandoPagamento = value;
  }

  getTotalPagamentos() : number{
    return this.pagamentos?
      this.pagamentos.reduce((sum,pag)=> sum + pag.valor,0)
      : 0;
  }

  getFaltaPagar(){
    return this.totalReserva - this.getTotalPagamentos();
  }
}
