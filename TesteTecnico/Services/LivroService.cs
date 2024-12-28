using TesteTecnico.Models;
using TesteTecnico.Models.DTOs;
using TesteTecnico.Repositories.Interfaces;
using TesteTecnico.Services.Interfaces;

namespace TesteTecnico.Services
{
    public class LivroService : ILivroService
    {
        private readonly ILivroRepository _repository;

        public LivroService(ILivroRepository repository)
        {
            _repository = repository;
        }

        public IEnumerable<Livro> GetAll() => _repository.GetAll();

        public Livro GetById(Guid id) => _repository.GetById(id);

        public void Add(Livro livro) => _repository.Add(livro);

        public void Update(LivroDto livroDto, Guid id)
        {
            // Obter o livro existente do repositório ou banco de dados
            var livro = GetById(id);

            // Atualizar as propriedades do livro com os dados recebidos do livroDto
            livro.Titulo = livroDto.Titulo;
            livro.Autor = livroDto.Autor;
            livro.Genero = livroDto.Genero;
            livro.AnoPublicacao = livroDto.AnoPublicacao;

            // Salvar a alteração no repositório
            _repository.Update(livro);
        }


        public void Delete(Guid id) => _repository.Delete(id);
    }
}
