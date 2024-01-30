import { LoadingService } from './../../services/loading.service';
import { StatusReservaMap } from './../../../models/enums/StatusReserva';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

import { IReserva } from '../../../models/interfaces/IReserva';
import { KeyValue } from '@angular/common';
import { SuitesMap } from '../../../models/enums/Suites';
import { ReservaService } from '../../services/reserva.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertMessage } from '../../../models/AlertMessage';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-reservas',
  templateUrl: './cadastro-reservas.component.html',
  styleUrl: './cadastro-reservas.component.css',
  providers: [ReservaService]
})
export class CadastroReservasComponent implements OnInit {

  statusReservaMap: KeyValue<number, string>[] = StatusReservaMap;
  suitesMap: KeyValue<number, string>[] = SuitesMap;
  checkBoxSujo: boolean = false;
  mensagensAlerta: AlertMessage = {
    erro: true,
    mensagens: []
  };
  mensagemRetorno: string | undefined;


  formCadastro: FormGroup = new FormGroup({});
  reserva: IReserva = {
      email: '',
      nome: '',
      telefone: '',
      checkin: new Date(),
      checkout: new Date(),
      chegada: '',
      qtdAdultos: 0,
      qtdCriancas: 0,
      status: 0,
      valor: 0,
      suites: []
  };

  constructor(formBuilder: FormBuilder,
    private reservaService: ReservaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loadingService: LoadingService){
    this.formCadastro = formBuilder.group({
      'nome': new FormControl(this.reserva.nome, [
        Validators.required, Validators.maxLength(200), Validators.minLength(2)
      ]),
      'email': new FormControl(this.reserva.nome, [
        Validators.required, Validators.maxLength(200), Validators.email
      ]),
      'telefone': new FormControl(this.reserva.telefone, [
        Validators.required
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

  ngOnInit(): void {
    this.activatedRoute
      .queryParams
      .subscribe((params)=> {
        this.mensagemRetorno = params['mensagem'];
        if (this.mensagemRetorno){
          this.mensagensAlerta = {
            erro: false,
            mensagens: [this.mensagemRetorno]
          }
        }
      });
  }

  onSelecionarSuite(event: MatCheckboxChange, suiteId: number) : void {

    let index = this.reserva.suites.lastIndexOf(suiteId);
    let itemExiste = index > -1;
    if (event.checked && !itemExiste){
        this.reserva.suites.push(suiteId);
    }
    else if (itemExiste){
        this.reserva.suites.splice(index, 1);
    }
    this.checkBoxSujo = true;
  }

  onCadastrarReserva(){
    if (this.formCadastro.valid){
      this.mensagensAlerta = {
        erro: false,
        mensagens: []
      };

      this.loadingService.show();
      this.reservaService.criarReserva(this.reserva)
        .subscribe({
          next: () => {
            this.router.navigate(['reservas/cadastro'], {
              queryParams: {
                mensagem: 'Reserva cadastrada com sucesso'
              }
            });
          },
          error: (e: HttpErrorResponse) => {
            let errors = e.error.errors;
            let errorsString: string[] = [];
            for (const prop in errors){
              if (errors.hasOwnProperty(prop)) {
                let arrayConteudo = errors[prop];
                if (arrayConteudo){
                  for (const item of arrayConteudo) {
                    errorsString.push(item);
                  }
                }
            }
            }

            this.mensagensAlerta = {
              erro: true,
              mensagens: errorsString
            }
          }
      })
      .add(() => {
        window.scroll({
          top:0,
          behavior: 'smooth'
        });
        this.loadingService.hide();
      });


    }
    else {
      this.formCadastro.markAllAsTouched();
    }
  }
}
