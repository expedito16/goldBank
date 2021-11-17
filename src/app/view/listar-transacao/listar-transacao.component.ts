import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listar-transacao',
  templateUrl: './listar-transacao.component.html',
  styleUrls: ['./listar-transacao.component.scss']
})
export class ListarTransacaoComponent implements OnInit {
  @Input() transacao: any

  constructor() { }

  ngOnInit(): void {
  }

}
