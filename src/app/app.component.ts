import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';

import {LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './common/SharedModule';
import { ReservasModule } from './reservas/reservas.module';
import { FooterComponent } from './footer/footer.component';

registerLocaleData(localePt);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ReservasModule,
    SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }]
})
export class AppComponent {
  title = 'hospedaria';
}
