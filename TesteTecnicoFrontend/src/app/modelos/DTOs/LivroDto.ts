export class LivroDto {
    titulo: string;
    autor: string;
    genero: string;
    anoPublicacao: number;

    constructor(titulo: string, autor: string, genero: string, anoPublicacao: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.anoPublicacao = anoPublicacao;
    }
}
