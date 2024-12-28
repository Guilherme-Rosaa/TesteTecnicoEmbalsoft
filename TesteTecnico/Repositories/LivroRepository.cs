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

        public IEnumerable<Livro> GetAll() => _context.Livros.ToList();

        public Livro GetById(Guid id) => _context.Livros.Find(id);

        public void Add(Livro livro)
        {
            _context.Livros.Add(livro);
            _context.SaveChanges();
        }

        public void Update(Livro livro)
        {
            _context.Livros.Update(livro);
            _context.SaveChanges();
        }

        public void Delete(Guid id)
        {
            var livro = _context.Livros.Find(id);
            if (livro != null)
            {
                _context.Livros.Remove(livro);
                _context.SaveChanges();
            }
        }
    }
}
