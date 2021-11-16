import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-criar-transacao',
  templateUrl: './criar-transacao.component.html',
  styleUrls: ['./criar-transacao.component.scss']
})
export class CriarTransacaoComponent implements OnInit {
  @Output() enviarTransacao = new EventEmitter<any>();

  nome?: string;
  conta?: string;
  valor?: number;

  constructor() { }

  ngOnInit(): void {
  }

  confirmarTransacao() {
    const transacao = { nome: this.nome, conta: this.conta, valor: this.valor };
    this.enviarTransacao.emit(transacao);
  }

}
