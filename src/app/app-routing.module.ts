import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarTransacaoComponent } from './view/listar-transacao/listar-transacao.component';
import { CriarTransacaoComponent } from './view/criar-transacao/criar-transacao.component';

const routes: Routes = [
  { path:'', redirectTo: 'lista-transacoes', pathMatch: 'full' },
  { path: 'lista-transacoes', component: ListarTransacaoComponent },
  { path: 'nova-transacao', component: CriarTransacaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
