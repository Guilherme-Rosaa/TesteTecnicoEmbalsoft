import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompartilhadoModule } from './compartilhado/compartilhado.module'; // Importando o módulo compartilhado
import { CarregamentoComponent } from './componentes/carregamento/carregamento.component';
import { LivrosModule } from './livros/livros.module';

@NgModule({
  declarations: [
    AppComponent,
    CarregamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CompartilhadoModule,
    LivrosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
