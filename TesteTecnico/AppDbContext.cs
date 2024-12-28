using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Reflection.Emit;
using TesteTecnico.Models;

namespace TesteTecnico
{
    public class AppDbContext : DbContext
    {
        public DbSet<Livro> Livros { get; set; }
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Livro>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Titulo).IsRequired().HasMaxLength(255);
                entity.Property(e => e.Autor).IsRequired().HasMaxLength(255);
            });
        }
    }
}
