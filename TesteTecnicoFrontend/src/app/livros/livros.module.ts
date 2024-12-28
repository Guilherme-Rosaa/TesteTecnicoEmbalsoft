import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing.module';
import { EditarLivroComponent } from './editar-livros/editar-livros.component';
import { LivrosComponent } from './livros/livros.component';
import { CriarLivroComponent } from './criar-livro/criar-livro.component';
import { FormularioLivroComponent } from '../componentes/formulario-livro/formulario-livro.component';

// Importando o módulo compartilhado
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';

@NgModule({
  declarations: [
    LivrosComponent,
    EditarLivroComponent,
    FormularioLivroComponent,
    CriarLivroComponent
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    CompartilhadoModule
  ]
})
export class LivrosModule { }
