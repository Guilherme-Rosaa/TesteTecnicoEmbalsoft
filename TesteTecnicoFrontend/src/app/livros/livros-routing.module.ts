import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarLivroComponent } from './criar-livro/criar-livro.component';
import { EditarLivroComponent } from './editar-livros/editar-livros.component';
import { LivrosComponent } from './livros/livros.component';

const routes: Routes = [
  { path: 'listar-livros', component: LivrosComponent },
  { path: 'editar-livro', component: EditarLivroComponent },
  { path: 'adicionar-livro', component: CriarLivroComponent },
  { path: '', redirectTo: '/listar-livros', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }
