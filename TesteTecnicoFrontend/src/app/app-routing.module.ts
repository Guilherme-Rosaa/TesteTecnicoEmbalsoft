import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/listar-livros', pathMatch: 'full' },
  { path: 'livros', loadChildren: () => import('./livros/livros.module').then(m => m.LivrosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
