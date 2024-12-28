using TesteTecnico.Models;
using TesteTecnico.Repositories.Interfaces;

namespace TesteTecnico.Repositories
{
    public class LivroRepository : ILivroRepository
    {
        private readonly AppDbContext _context;

        public LivroRepository(AppDbContext context)
        {
            _context = context;
        }

        public bool Any(Func<Livro, bool> predicate)
        {
            try
            {
                return _context.Set<Livro>().Any(predicate);
            }
            catch (Exception ex)
            {
                throw new ApplicationException("Erro ao verificar a existência do livro.", ex);
            }
        }

        public IEnumerable<Livro> GetAll()
        {
            try
            {
                return _context.Livros.ToList();
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
                var livro = _context.Livros.Find(id);
                if (livro == null)
                {
                    throw new KeyNotFoundException($"Livro com ID {id} não encontrado.");
                }

                return livro;
            }
            catch (Exception ex)
            {
                throw new ApplicationException($"Erro ao buscar o livro com ID {id}.", ex);
            }
        }

        public void Add(Livro livro)
        {
            try
            {
                _context.Livros.Add(livro);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new ApplicationException("Erro ao adicionar o livro.", ex);
            }
        }

        public void Update(Livro livro)
        {
            try
            {
                _context.Livros.Update(livro);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new ApplicationException($"Erro ao atualizar o livro com ID {livro.Id}.", ex);
            }
        }

        public void Delete(Guid id)
        {
            try
            {
                var livro = _context.Livros.Find(id);
                if (livro == null)
                {
                    throw new KeyNotFoundException($"Livro com ID {id} não encontrado para exclusão.");
                }

                _context.Livros.Remove(livro);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new ApplicationException($"Erro ao excluir o livro com ID {id}.", ex);
            }
        }
    }
}
