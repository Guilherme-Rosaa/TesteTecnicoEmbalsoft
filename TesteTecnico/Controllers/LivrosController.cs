using Microsoft.AspNetCore.Mvc;
using TesteTecnico.Models;
using TesteTecnico.Models.DTOs;
using TesteTecnico.Services.Interfaces;

namespace TesteTecnico.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LivrosController : ControllerBase
    {
        private readonly ILivroService _service;

        public LivrosController(ILivroService service)
        {
            _service = service;
        }

        [HttpGet]
        public IActionResult GetAll() => Ok(_service.GetAll());

        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            var livro = _service.GetById(id);
            return livro != null ? Ok(livro) : NotFound();
        }

        [HttpPost]
        public IActionResult Add([FromBody] LivroDto livroDto)
        {
            // Mapeia o DTO para a entidade Livro
            var livro = new Livro
            {
                Titulo = livroDto.Titulo,
                Autor = livroDto.Autor,
                Genero = livroDto.Genero,
                AnoPublicacao = livroDto.AnoPublicacao
            };

            _service.Add(livro); // Passa o modelo para o serviço
            return CreatedAtAction(nameof(GetById), new { id = livro.Id }, livro);
        }


        [HttpPut("{id}")]
        public IActionResult Update(Guid id, [FromBody] LivroDto livroDto)
        {
            _service.Update(livroDto, id);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            _service.Delete(id);
            return NoContent();
        }
    }
}
