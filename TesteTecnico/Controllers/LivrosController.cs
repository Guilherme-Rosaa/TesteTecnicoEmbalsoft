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
        public IActionResult GetAll()
        {
            try
            {
                var livros = _service.GetAll();
                return Ok(livros);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao buscar os livros: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            try
            {
                var livro = _service.GetById(id);
                return livro != null ? Ok(livro) : NotFound($"Livro com ID {id} não encontrado.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao buscar o livro com ID {id}: {ex.Message}");
            }
        }

        [HttpPost]
        public IActionResult Add([FromBody] LivroDto livroDto)
        {
            try
            {
                var livro = _service.Add(livroDto);
                return CreatedAtAction(nameof(GetById), new { id = livro.Id }, livro);
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500,  ex.Message);
            }
        }

        [HttpPut("{id}")]
        public IActionResult Update(Guid id, [FromBody] LivroDto livroDto)
        {
            try
            {
                var livro = _service.Update(livroDto, id);
                return Ok(livro);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao atualizar o livro com ID {id}: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                _service.Delete(id);
                return NoContent();
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao excluir o livro com ID {id}: {ex.Message}");
            }
        }
    }
}
