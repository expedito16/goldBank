import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'goldBank';
  @Input() transacao: any[] = [];

  transacoes($event: any) {
    const dados = {...$event}
    this.transacao.push(dados);
  }
}
