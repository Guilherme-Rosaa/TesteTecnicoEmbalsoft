﻿using TesteTecnico.Models;
using TesteTecnico.Models.DTOs;

namespace TesteTecnico.Services.Interfaces
{
    public interface ILivroService
    {
        IEnumerable<Livro> GetAll();
        Livro GetById(Guid id);
        void Add(Livro livro);
        void Update(LivroDto livro, Guid id);
        void Delete(Guid id);
    }
}