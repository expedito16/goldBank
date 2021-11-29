import { Component, OnInit } from '@angular/core';
import { TransacaoService } from '../service/transacao.service';

@Component({
  selector: 'app-listar-transacao',
  templateUrl: './listar-transacao.component.html',
  styleUrls: ['./listar-transacao.component.scss']
})
export class ListarTransacaoComponent implements OnInit {
  transacoes: any[] = [];

  constructor(
    private transacaoService: TransacaoService
  ) { }

  ngOnInit(): void {
    this.listaTransacoes();
  }

  listaTransacoes() {
    this.transacaoService.listaTransacoes().subscribe((transacao: any) => {
      this.transacoes = transacao;
    });
  }

}
