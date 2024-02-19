import { Component, Inject } from '@angular/core';

import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';


@Component({
  selector: 'app-excluir-reserva-dialog',
  templateUrl: './excluir-reserva-dialog.component.html',
  styleUrl: './excluir-reserva-dialog.component.css'
})
export class ExcluirReservaDialogComponent {
  constructor(public excluirReservaDialog: MatDialogRef<ExcluirReservaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string){
    console.log(data);
  }

  onClose(){
    this.excluirReservaDialog.close();
  }
}
