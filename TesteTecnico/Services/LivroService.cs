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

        public IEnumerable<Livro> GetAll()
        {
            try
            {
                return _repository.GetAll();
            }
            catch (Exception ex)
            {
                throw new ApplicationException("Erro ao buscar todos os livros.", ex);
            }
        }

        public Livro GetById(Guid id)
        {
            try
            {
                var livro = _repository.GetById(id);
                if (livro == null)
                    throw new KeyNotFoundException("Livro não encontrado.");

                return livro;
            }
            catch (Exception ex)
            {
                throw new ApplicationException($"Erro ao buscar o livro com ID {id}.", ex);
            }
        }

        public Livro Add(LivroDto livroDto)
        {
            try
            {
                bool livroExiste = _repository
                    .Any(l => l.Titulo == livroDto.Titulo &&
                              l.Autor == livroDto.Autor &&
                              l.Genero == livroDto.Genero &&
                              l.AnoPublicacao == livroDto.AnoPublicacao);

                if (livroExiste)
                {
                    throw new InvalidOperationException("Já existe um livro com os mesmos dados.");
                }

                var livro = new Livro
                {
                    Titulo = livroDto.Titulo,
                    Autor = livroDto.Autor,
                    Genero = livroDto.Genero,
                    AnoPublicacao = livroDto.AnoPublicacao
                };

                _repository.Add(livro);
                return livro;
            }
            catch (Exception ex)
            {
                throw new ApplicationException(ex.Message);
            }
        }

        public Livro Update(LivroDto livroDto, Guid id)
        {
            try
            {
                var livro = GetById(id);
                livro.Titulo = livroDto.Titulo;
                livro.Autor = livroDto.Autor;
                livro.Genero = livroDto.Genero;
                livro.AnoPublicacao = livroDto.AnoPublicacao;

                _repository.Update(livro);

                return livro;
            }
            catch (KeyNotFoundException ex)
            {
                throw new ApplicationException("Não foi possível atualizar. Livro não encontrado.", ex);
            }
            catch (Exception ex)
            {
                throw new ApplicationException($"Erro ao atualizar o livro com ID {id}.", ex);
            }
        }

        public void Delete(Guid id)
        {
            try
            {
                var livro = GetById(id);
                if (livro == null)
                {
                    throw new KeyNotFoundException("Não foi possível excluir. Livro não encontrado.");
                }

                _repository.Delete(id);
            }
            catch (KeyNotFoundException ex)
            {
                throw new ApplicationException("Não foi possível excluir. Livro não encontrado.", ex);
            }
            catch (Exception ex)
            {
                throw new ApplicationException($"Erro ao excluir o livro com ID {id}.", ex);
            }
        }
    }
}
