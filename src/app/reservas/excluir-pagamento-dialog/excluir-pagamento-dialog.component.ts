import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IExcluirPagamento } from '../../../models/interfaces/IExcluirPagamento';
import { ExcluirReservaDialogComponent } from '../excluir-reserva-dialog/excluir-reserva-dialog.component';

@Component({
  selector: 'app-excluir-pagamento-dialog',
  templateUrl: './excluir-pagamento-dialog.component.html',
  styleUrl: './excluir-pagamento-dialog.component.css'
})
export class ExcluirPagamentoDialogComponent {
  excluirReservaDialog: MatDialogRef<ExcluirReservaDialogComponent> = inject(MatDialogRef<ExcluirReservaDialogComponent>)
  data: IExcluirPagamento = inject(MAT_DIALOG_DATA);

  onClose(){
    this.excluirReservaDialog.close();
  }
}
