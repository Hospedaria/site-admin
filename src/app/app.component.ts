import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';

import {LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

registerLocaleData(localePt);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    CommonModule,
    ReactiveFormsModule,
    FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ]
})
export class AppComponent {
  title = 'hospedaria';
}
