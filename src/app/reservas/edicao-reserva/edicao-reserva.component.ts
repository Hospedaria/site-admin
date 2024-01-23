import { StatusReserva, StatusReservaMap } from './../../../models/enums/StatusReserva';
import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';

import { IReserva } from '../../../models/interfaces/IReserva';
import { MatNativeDateModule } from '@angular/material/core';
import { KeyValue } from '@angular/common';
import { Suite, SuitesMap } from '../../../models/enums/Suites';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edicao-reserva',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,MatDatepickerModule,
    MatNativeDateModule, MatSelectModule, MatCheckboxModule,
    MatButtonModule,
    FormsModule, ReactiveFormsModule],
  templateUrl: './edicao-reserva.component.html',
  styleUrl: './edicao-reserva.component.css'
})
export class EdicaoReservaComponent {

  statusReservaMap: KeyValue<number, string>[] = StatusReservaMap;
  suitesMap: KeyValue<number, string>[] = SuitesMap;
  checkBoxSujo: boolean = false;

  formCadastro: FormGroup = new FormGroup({});
  reserva: IReserva = {
    id: 1,
    email: 'pedro@gmail.com',
    nome: 'Pedro Henrique',
    checkin: new Date(),
    checkout: new Date(),
    chegada: '12:00',
    qtdAdultos: 2,
    qtdCriancas: 0,
    status: StatusReserva.Confirmado.toString(),
    valor: 300,
    suites: ['Amarela']
  };

  constructor(formBuilder: FormBuilder){
    this.formCadastro = formBuilder.group({
      'nome': new FormControl(this.reserva.nome, [
        Validators.required, Validators.maxLength(200), Validators.minLength(2)
      ]),
      'email': new FormControl(this.reserva.nome, [
        Validators.required, Validators.maxLength(200), Validators.email
      ]),
      'checkin': new FormControl(this.reserva.checkin, Validators.required),
      'checkout': new FormControl(this.reserva.checkout, Validators.required),
      'chegada': new FormControl(this.reserva.chegada, Validators.required),
      'valor': new FormControl(this.reserva.valor, [
        Validators.required, Validators.min(0.01)]),
      'adultos': new FormControl(this.reserva.qtdAdultos, [
        Validators.required, Validators.min(1)
      ]),
      'criancas': new FormControl(this.reserva.qtdCriancas, [
        Validators.required, Validators.min(0)
      ]),
      'status': new FormControl(this.reserva.status, [
        Validators.required
      ]),
      'observacoes': new FormControl(this.reserva.observacoes, [
        Validators.maxLength(255)
      ]),
      'suites': new FormControl(this.reserva.suites)
    });
  }

  suiteEstaSelecionada(suite: string) : boolean {
    let index = this.reserva.suites.lastIndexOf(suite);
    return index > -1;
  }

  onSelecionarSuite(event: MatCheckboxChange, suite: string) : void {

    let index = this.reserva.suites.lastIndexOf(suite);
    let itemExiste = index > -1;
    if (event.checked && !itemExiste){
        this.reserva.suites.push(suite);
    }
    else if (itemExiste){
        this.reserva.suites.splice(index, 1);
    }
    this.checkBoxSujo = true;

    console.log(this.reserva);
  }

}
