import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TransacaoService } from '../service/transacao.service';

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

  constructor(
    private transacaoService: TransacaoService
  ) { }

  ngOnInit(): void {
  }

  confirmarTransacao() {
    const transacao = { nome: this.nome, conta: this.conta, valor: this.valor };
    this.transacaoService.criarTransacao(transacao).subscribe((resultado: any) => {
      alert("Transação realizada com sucesso!");
    });

    this.limparCampos();
  }

  limparCampos() {
    this.nome = "";
    this.conta = "";
    this.valor = 0;
  }
}
