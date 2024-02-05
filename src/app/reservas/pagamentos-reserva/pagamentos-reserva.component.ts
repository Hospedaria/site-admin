import { Component, OnInit, inject } from '@angular/core';
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
  pagamentos: IPagamento[] = []

  ngOnInit(): void {
    this.idReserva = this.activatedRoute.snapshot.params["id"];
  }

  onAdicionarPagamento() : void{
    this.estaRegistrandoPagamento = true;
  }

  trocaEstaRegistrando(value: boolean) {
    this.estaRegistrandoPagamento = value;
  }
}
