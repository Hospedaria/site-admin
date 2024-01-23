import { Component, Inject } from '@angular/core';

import {
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-excluir-reserva-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './excluir-reserva-dialog.component.html',
  styleUrl: './excluir-reserva-dialog.component.css'
})
export class ExcluirReservaDialogComponent {
  constructor(public excluirReservaDialog: MatDialogRef<ExcluirReservaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number){
    console.log(data);
  }

  onClose(){
    this.excluirReservaDialog.close();
  }
}
