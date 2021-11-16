import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-transacao',
  templateUrl: './criar-transacao.component.html',
  styleUrls: ['./criar-transacao.component.scss']
})
export class CriarTransacaoComponent implements OnInit {

  nome?: string;
  conta?: string;
  valor?: number;

  constructor() { }

  ngOnInit(): void {
  }

  enviarTransacao() {
    console.log("nome", this.nome);
    console.log("conta", this.conta);
    console.log("valor", this.valor);
  }

}
