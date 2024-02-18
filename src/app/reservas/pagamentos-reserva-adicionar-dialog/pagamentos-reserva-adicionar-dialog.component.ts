import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { IPagamento } from '../../../models/interfaces/IPagamento';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pagamentos-reserva-adicionar-dialog',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,

    MatFormFieldModule, MatInputModule,MatDatepickerModule,
    MatNativeDateModule, MatButtonModule, MatDialogActions,
    MatDialogClose, MatDialogTitle,
    MatDialogContent
  ],
  providers: [
    MatDatepickerModule,
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'pt-BR'
    }
  ],
  templateUrl: './pagamentos-reserva-adicionar-dialog.component.html',
  styleUrl: './pagamentos-reserva-adicionar-dialog.component.css'
})
export class PagamentosReservaAdicionarDialogComponent {
  excluirReservaDialog: MatDialogRef<PagamentosReservaAdicionarDialogComponent> = inject(MatDialogRef<PagamentosReservaAdicionarDialogComponent>)
  data: string = inject(MAT_DIALOG_DATA);
  formBuilder: FormBuilder = inject(FormBuilder);

  pagamento: IPagamento = {
    idReserva: this.data,
    descricao: 'Sinal',
    valor: 0,
    data: new Date()
  };
  form: FormGroup = this.formBuilder.group({
    'descricao': [this.pagamento.descricao, [
      Validators.required, Validators.maxLength(200)
    ]],
    'valor': [this.pagamento.valor, [
      Validators.required, Validators.min(0)
    ]],
    'data': [this.pagamento.data, [Validators.required]]
  });

  onClose(){
    this.excluirReservaDialog.close();
  }

  onAdicionar(): void {
    if(this.form.valid){

      this.excluirReservaDialog.close(this.pagamento);
    }
    else {
      this.form.markAsDirty();
    }
  }
}
