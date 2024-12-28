import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Livro } from 'src/app/modelos/Livro';
import { CarregamentoService } from 'src/app/servicos/carregamento.service';
import { LivrosService } from 'src/app/servicos/livros.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent {
  displayedColumns: string[] = ['titulo', 'autor', 'genero', 'anoPublicacao', 'acoes'];
  livros: Livro[] = [];

  constructor(
    private router: Router,
    private service: LivrosService,
    private carregamentoService: CarregamentoService
  ) { }

  ngOnInit(): void {
    this.carregamentoService.definirCarregando(true);
    this.service.buscarLivros().subscribe((resp: any) => {
      this.livros = resp;
      this.carregamentoService.definirCarregando(false);
    })
  }

  adicionarLivro(): void {
    this.router.navigate(['adicionar-livro', { novo: true }]);
  }

  editarLivro(livro: Livro): void {
    this.router.navigate(['editar-livro', { id: livro.id }]);
  }

  excluirLivro(livroId: string): void {
    this.carregamentoService.definirCarregando(true);
    this.service.excluirLivro(livroId).subscribe((resp: any) => {
      this.carregamentoService.definirCarregando(false);
      this.ngOnInit();
    })
  }
}
