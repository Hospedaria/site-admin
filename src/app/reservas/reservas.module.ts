import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservasComponent } from './reservas/reservas.component';
import { CadastroReservasComponent } from './cadastro-reservas/cadastro-reservas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReservasComponent,
    CadastroReservasComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule, ReactiveFormsModule
  ]
})
export class ReservasModule { }
