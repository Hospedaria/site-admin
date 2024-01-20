import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservasComponent } from './reservas/reservas.component';
import { CadastroReservasComponent } from './cadastro-reservas/cadastro-reservas.component';



@NgModule({
  declarations: [ReservasComponent, CadastroReservasComponent],
  imports: [
    CommonModule
  ],
  exports: [ReservasComponent, CadastroReservasComponent]
})
export class ReservasModule { }
