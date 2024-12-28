using TesteTecnico.Models;

namespace TesteTecnico.Repositories.Interfaces
{
    public interface ILivroRepository
    {
        bool Any(Func<Livro, bool> predicate);
        IEnumerable<Livro> GetAll();
        Livro GetById(Guid id);
        void Add(Livro livro);
        void Update(Livro livro);
        void Delete(Guid id);
    }
}
