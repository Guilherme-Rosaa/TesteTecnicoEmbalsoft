import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrosComponent } from './paginas/livros/livros.component';
import { EditarLivroComponent } from './paginas/editar-livros/editar-livros.component';
import { CriarLivroComponent } from './paginas/criar-livro/criar-livro.component';

const routes: Routes = [
  { path: 'listar-livros', component: LivrosComponent },
  { path: 'editar-livro', component: EditarLivroComponent },
  { path: 'adicionar-livro', component: CriarLivroComponent },
  { path: '', redirectTo: '/listar-livros', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
