import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { EditarLivroComponent } from 'src/app/paginas/editar-livros/editar-livros.component';
import { Livro } from 'src/app/modelos/Livro';
import { CarregamentoService } from 'src/app/servicos/carregamento.service';
import { LivrosService } from 'src/app/servicos/livros.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent {
// Dados fictícios para os livros
livros: Livro[] = [];

constructor(
  private router: Router,
  private service: LivrosService,
  private toastrService: ToastrService,
  private carregamentoService: CarregamentoService
) { }

ngOnInit(): void {
  this.carregamentoService.setLoading(true);
  this.service.getLivros().subscribe((resp: any) => {
    this.livros = resp;
    this.carregamentoService.setLoading(false);
  })
}

adicionarLivro(): void {
  // Navega para a página de criação de um novo livro
  this.router.navigate(['adicionar-livro', { novo: true }]);
}

// Método para editar um livro
editarLivro(livro: Livro): void {
  console.log('Editar livro', livro);
  this.router.navigate(['editar-livro', { id: livro.id }] );
}

excluirLivro(livroId: string): void {
  this.carregamentoService.setLoading(true);
  this.service.deleteLivro(livroId).subscribe((resp: any) => {
    this.carregamentoService.setLoading(false);
    this.ngOnInit();
  })
}
}
