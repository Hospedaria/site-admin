import { AlertMessage } from './../../../models/AlertMessage';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: false,
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {

  @Input() mensagensAlerta: AlertMessage = {erro: false, mensagens: []};
}
