import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Livro } from 'src/app/modelos/Livro';
import { CarregamentoService } from 'src/app/servicos/carregamento.service';
import { LivrosService } from 'src/app/servicos/livros.service';

@Component({
  selector: 'app-editar-livros',
  templateUrl: './editar-livros.component.html',
  styleUrls: ['./editar-livros.component.scss'],
})
export class EditarLivroComponent implements OnInit {

  livroId: string = '';

  constructor(
    private route: ActivatedRoute,
    private service: LivrosService,
    private router: Router,
    private toastrService: ToastrService,
    private carregamentoService: CarregamentoService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.livroId = params.get('id') || '';
    });
  }

  editarLivro(event: any): void {
    const livro = event.livro;
    const livroId = event.id;

    if(livroId != this.livroId){
      this.toastrService.error("Tivemos um problema para identificar o livro, tente novamente!");
      this.router.navigate(['']);
    }

    this.service.editLivro(livroId, livro).subscribe(
      (resp: Livro) => {
        this.toastrService.success(`Livro ${resp.titulo} editado com sucesso!`);
        this.carregamentoService.setLoading(false);
      },
      (error) => {
        this.toastrService.error(error, "Erro ao editar o livro!");
        this.carregamentoService.setLoading(false);
      }
    );
  }

}
