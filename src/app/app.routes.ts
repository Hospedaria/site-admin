import { Routes } from '@angular/router';
import { ReservasComponent } from './reservas/reservas/reservas.component';
import { CadastroReservasComponent } from './reservas/cadastro-reservas/cadastro-reservas.component';


export const routes: Routes = [
    { path: 'reservas', component: ReservasComponent},
    { path: 'reservas/cadastro', component: CadastroReservasComponent }
];
