import { PagamentosReservaAdicionarComponent } from './pagamentos-reserva-adicionar/pagamentos-reserva-adicionar.component';
import { PagamentosReservaComponent } from './pagamentos-reserva/pagamentos-reserva.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../common/SharedModule';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';

import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';

import { LoadingService } from '../services/loading.service';

import { ListaPagamentosReservaComponent } from './lista-pagamentos-reserva/lista-pagamentos-reserva.component';
import { ExcluirReservaDialogComponent } from './excluir-reserva-dialog/excluir-reserva-dialog.component';
import { EdicaoReservaComponent } from './edicao-reserva/edicao-reserva.component';
import { CadastroReservasComponent } from './cadastro-reservas/cadastro-reservas.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ExcluirPagamentoDialogComponent } from './excluir-pagamento-dialog/excluir-pagamento-dialog.component';

@NgModule({
  declarations: [CadastroReservasComponent,
    EdicaoReservaComponent,
    ReservasComponent,
    ExcluirReservaDialogComponent,
    PagamentosReservaComponent,
    ListaPagamentosReservaComponent,
    ExcluirPagamentoDialogComponent,
    PagamentosReservaAdicionarComponent
    ],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule,

    MatFormFieldModule, MatInputModule,MatDatepickerModule,
    MatNativeDateModule, MatSelectModule, MatCheckboxModule,
    MatButtonModule, MatCardModule, MatIcon, MatChipsModule,
    MatMenuModule, MatDialogActions, MatDialogClose, MatDialogTitle,
    MatDialogContent, MatListModule,

    SharedModule,
  ],
  providers: [
    LoadingService,
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'pt-BR'
    }
  ],
  exports: [
    CadastroReservasComponent
  ]
})
export class ReservasModule { }
