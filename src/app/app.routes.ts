import { Routes } from '@angular/router';
import { ReservasComponent } from './reservas/reservas/reservas.component';
import { CadastroReservasComponent } from './reservas/cadastro-reservas/cadastro-reservas.component';
import { EdicaoReservaComponent } from './reservas/edicao-reserva/edicao-reserva.component';


export const routes: Routes = [
    { path: 'reservas', component: ReservasComponent},
    { path: 'reservas/cadastro', component: CadastroReservasComponent },
    { path: 'reservas/editar/:id', component: EdicaoReservaComponent }

];
