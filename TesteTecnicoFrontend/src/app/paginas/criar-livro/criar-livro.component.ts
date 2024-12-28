import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Livro } from 'src/app/modelos/Livro';
import { CarregamentoService } from 'src/app/servicos/carregamento.service';
import { LivrosService } from 'src/app/servicos/livros.service';

@Component({
  selector: 'app-criar-livro',
  templateUrl: './criar-livro.component.html',
  styleUrls: ['./criar-livro.component.scss'],
})
export class CriarLivroComponent {
  constructor(
    private service: LivrosService,
    private router: Router,
    private toastrService: ToastrService,
    private carregamentoService: CarregamentoService
  ) { }

  salvarLivro(event: any): void {
    const livro = event;
    this.service.addLivro(livro).subscribe(
      (resp: Livro) => {
        this.toastrService.success(`Livro ${resp.titulo} cadastrado com sucesso!`);
        this.carregamentoService.setLoading(false);
        this.router.navigate(['']);
      },
      (error) => {
        this.toastrService.error(error.error, "Erro ao salvar o livro!");
        this.carregamentoService.setLoading(false);
      }
    );
  }
}
