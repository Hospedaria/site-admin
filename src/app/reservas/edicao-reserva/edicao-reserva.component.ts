import { ActivatedRoute, Router } from '@angular/router';
import { StatusReservaMap } from './../../../models/enums/StatusReserva';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

import { IReserva } from '../../../models/interfaces/IReserva';
import { KeyValue } from '@angular/common';
import { SuitesMap } from '../../../models/enums/Suites';
import { ReservaService } from '../../services/reserva.service';
import { LoadingService } from '../../services/loading.service';
import { AlertMessage } from '../../../models/AlertMessage';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edicao-reserva',
  templateUrl: './edicao-reserva.component.html',
  styleUrl: './edicao-reserva.component.css'
})
export class EdicaoReservaComponent implements OnInit {

  statusReservaMap: KeyValue<number, string>[] = StatusReservaMap;
  suitesMap: KeyValue<number, string>[] = SuitesMap;
  checkBoxSujo: boolean = false;
  mensagemRetorno: string | undefined;
  mensagensAlerta: AlertMessage = {
    erro: true,
    mensagens: []
  };

  formCadastro: FormGroup = new FormGroup({});
  reserva: IReserva = {
    id: '',
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
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private loadingService: LoadingService){
    this.formCadastro = formBuilder.group({
      'nome': new FormControl(this.reserva.nome, [
        Validators.required, Validators.maxLength(200), Validators.minLength(2)
      ]),
      'email': new FormControl(this.reserva.nome, [
        Validators.maxLength(200), Validators.email
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
    this.loadingService.show();
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

    let id = this.activatedRoute.snapshot.params["id"];
    this.reservaService.obterReserva(
      id
    ).subscribe({
      next: (r)=> this.reserva = r,
      error: (e) => this.router.navigate(['reservas'])
    })
    .add(()=> this.loadingService.hide());
  }

  suiteEstaSelecionada(suiteId: number) : boolean {
    let index = this.reserva.suites.lastIndexOf(suiteId);
    return index > -1;
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

  onEditarSuite() {
    if (this.formCadastro.valid){

      this.loadingService.show();
      let id: string = this.reserva.id || '';
      this.reservaService.atualizarReserva(
        id,
        this.reserva
      )
      .subscribe({
        next: () => {
          this.router.navigate([`reservas/editar/${id}`], {
            queryParams: {
              mensagem: 'Reserva editada com sucesso'
            }
          });
        },
        error: (e: HttpErrorResponse)=> {
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
        this.loadingService.hide()
      });
    }
    else{
      this.formCadastro.markAsDirty();
      this.mensagensAlerta = {
        erro: true,
        mensagens: ['Existem erros de preenchimento no formulário']
      };
      window.scroll({
        top:0,
        behavior: 'smooth'
      });
    }
  }

}
