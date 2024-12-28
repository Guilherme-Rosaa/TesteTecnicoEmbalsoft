import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Livro } from 'src/app/modelos/Livro';
import { CarregamentoService } from 'src/app/servicos/carregamento.service';
import { LivrosService } from 'src/app/servicos/livros.service';

@Component({
  selector: 'app-formulario-livro',
  templateUrl: './formulario-livro.component.html',
  styleUrls: ['./formulario-livro.component.scss']
})
export class FormularioLivroComponent implements OnInit {

  @Input() livroId: string = "";
  @Input() isNovo: boolean = false;

  @Output() novoLivro = new EventEmitter<Livro>();
  @Output() editarLivro = new EventEmitter<{ livro: Livro, id: string }>();

  livroForm: FormGroup = this.fb.group({
    titulo: ['', Validators.required],
    autor: ['', Validators.required],
    genero: ['', Validators.required],
    anoPublicacao: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]]
  });

  constructor(
    private fb: FormBuilder,
    private service: LivrosService,
    private toastrService: ToastrService,
    private router: Router,
    private carregamentoService: CarregamentoService
  ) { }

  ngOnInit(): void {
    if (!this.isNovo && this.livroId) {
      this.buscarLivro();
    }
  }

  salvarLivro(): void {
    this.carregamentoService.setLoading(true);
    if (this.livroForm.valid) {
      const livro = this.livroForm.value;

      if (this.isNovo) {
        const livro = this.livroForm.value;
        this.novoLivro.emit(livro);
      } else if (this.livroId) {
        this.editarLivro.emit({ livro, id: this.livroId });
      } else {
        this.toastrService.error('Tivemos um problema para identificar a ação realizada!');
        this.carregamentoService.setLoading(false);
        this.router.navigate(['']);
      }
    } else {
      this.toastrService.error('Formulário inválido. Verifique os campos destacados.');
      this.exibirErrosFormulario();
    }
  }

  buscarLivro(): void {
    this.carregamentoService.setLoading(true);
    this.service.getLivro(this.livroId).subscribe(
      (resp: Livro) => {
        this.livroForm.setValue({
          titulo: resp.titulo,
          autor: resp.autor,
          genero: resp.genero,
          anoPublicacao: resp.anoPublicacao
        });
        this.carregamentoService.setLoading(false);
      },
      (error) => {
        this.toastrService.error('Erro ao carregar informações do livro.');
        this.carregamentoService.setLoading(false);
      }
    );
  }

  getErrorMessage(field: string): string {
    const control = this.livroForm.get(field);
    if (control?.hasError('required')) {
      return 'Campo obrigatório.';
    }
    if (control?.hasError('pattern') && field === 'anoPublicacao') {
      return 'O ano de publicação deve ser um número de 4 dígitos.';
    }
    return '';
  }

  private exibirErrosFormulario(): void {
    Object.keys(this.livroForm.controls).forEach((field) => {
      const control = this.livroForm.get(field);
      if (control && control.invalid) {
        this.toastrService.error(`Campo ${field} está inválido:` + control.errors);
      }
    });
  }

  voltar() {
    this.router.navigate(['']);
  }
}
