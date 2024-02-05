import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPagamento } from '../../../models/interfaces/IPagamento';

@Component({
  selector: 'app-pagamentos-reserva-adicionar',
  templateUrl: './pagamentos-reserva-adicionar.component.html',
  styleUrl: './pagamentos-reserva-adicionar.component.css'
})
export class PagamentosReservaAdicionarComponent implements OnInit {
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
      this.estaCadastrando.emit(false);
    }
    else {
      this.form.markAllAsTouched();
    }
  }

  ngOnInit(): void {
    this.estaCadastrando.emit(true);
  }
}
