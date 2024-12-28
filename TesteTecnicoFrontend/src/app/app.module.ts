import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivrosComponent } from './paginas/livros/livros.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarLivroComponent } from './paginas/editar-livros/editar-livros.component';
import { HttpClientModule } from '@angular/common/http';  // Importa o HttpClientModule
import { ToastrModule } from 'ngx-toastr';
import { CarregamentoComponent } from './componentes/carregamento/carregamento.component';
import { FormularioLivroComponent } from './componentes/formulario-livro/formulario-livro.component';
import { CriarLivroComponent } from './paginas/criar-livro/criar-livro.component';

@NgModule({
  declarations: [
    AppComponent,
    LivrosComponent,
    EditarLivroComponent,
    CarregamentoComponent,
    FormularioLivroComponent,
    CriarLivroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000, // tempo de exibição
      positionClass: 'toast-top-right', // posição
      preventDuplicates: true, // evitar duplicações
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
