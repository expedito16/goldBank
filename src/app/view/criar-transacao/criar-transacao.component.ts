import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TransacaoService } from '../service/transacao.service';
import { Router } from '@angular/router';

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
    private transacaoService: TransacaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  confirmarTransacao() {
    const transacao = { nome: this.nome, conta: this.conta, valor: this.valor };
    this.transacaoService.criarTransacao(transacao).subscribe(() => {
      this.router.navigateByUrl('lista-transacoes');
      alert("Transação realizada com sucesso!");
    });
  }
}
