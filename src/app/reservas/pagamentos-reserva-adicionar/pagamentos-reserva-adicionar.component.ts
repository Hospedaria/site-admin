import { Component, EventEmitter, Inject, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPagamento } from '../../../models/interfaces/IPagamento';
import { LoadingService } from '../../services/loading.service';
import { PagamentosService } from '../../services/pagamentos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagamentos-reserva-adicionar',
  templateUrl: './pagamentos-reserva-adicionar.component.html',
  styleUrl: './pagamentos-reserva-adicionar.component.css'
})
export class PagamentosReservaAdicionarComponent implements OnInit {
  loadingService: LoadingService = inject(LoadingService);
  pagamentoService: PagamentosService = inject(PagamentosService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  idReserva: string = '';

  @Output()
  estaCadastrando = new EventEmitter<boolean>();


  formBuilder: FormBuilder = inject(FormBuilder);

  pagamento: IPagamento = {
    idReserva: '',
    descricao: 'Sinal',
    valor: 0,
    data: new Date()
  };
  form: FormGroup = this.formBuilder.group({
    'descricao': [this.pagamento.descricao, [
      Validators.required, Validators.maxLength(200)
    ]],
    'valor': [this.pagamento.valor, [
      Validators.required, Validators.min(0.01)
    ]],
    'data': [this.pagamento.data, [Validators.required]]
  });

  onCancelar(): void {
    this.estaCadastrando.emit(false);
  }

  onAdicionar(): void {
    if(this.form.valid){
      this.loadingService.show();
      this.pagamento.idReserva = this.idReserva;
      this.pagamentoService.criarPagamento(this.pagamento)
        .subscribe({
          next:() => {
            this.estaCadastrando.emit(false);
            this.router.navigate([`reservas/editar/${this.idReserva}`], {
              queryParams: {
                mensagem: 'Pagamento adicionado com sucesso'
              }
            });
            window.location.reload();
          }
        })
        .add(()=> this.loadingService.hide());
    }
    else {
      this.form.markAllAsTouched();
    }
  }

  ngOnInit(): void {
    this.estaCadastrando.emit(true);
    this.idReserva = this.activatedRoute.snapshot.params["id"];
  }
}
