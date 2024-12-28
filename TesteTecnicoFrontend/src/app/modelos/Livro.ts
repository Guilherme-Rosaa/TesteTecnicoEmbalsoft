export class Livro {
  id: string;
  titulo: string;
  autor: string;
  genero: string;
  anoPublicacao: number;

  constructor(id: string, titulo: string, autor: string, genero: string, anoPublicacao: number) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.genero = genero;
    this.anoPublicacao = anoPublicacao;
  }
}
