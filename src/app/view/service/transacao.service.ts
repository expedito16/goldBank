import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transacao } from '../Transacao.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  url = 'http://localhost:3000/lista-transacoes';
  transacao: any[] = []

  constructor(
    private httpClient: HttpClient
  ) { }

  get transacoes() {
    return this.transacao;
  }

  listaTransacoes() {
    return this.httpClient.get<Transacao>(this.url);
  }

  criarTransacao(criarTransacao: Transacao): Observable<Transacao>{
    this.horarioTransacao(criarTransacao);

    return this.httpClient.post(this.url, criarTransacao);
  }

  horarioTransacao(criarTransacao: any) {
    criarTransacao.data = new Date();
  }

}
