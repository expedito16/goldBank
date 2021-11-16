import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarTransacaoComponent } from './view/criar-transacao/criar-transacao.component';
import { ListarTransacaoComponent } from './view/listar-transacao/listar-transacao.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarTransacaoComponent,
    ListarTransacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
