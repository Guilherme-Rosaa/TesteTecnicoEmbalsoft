using Microsoft.EntityFrameworkCore;
using TesteTecnico;
using TesteTecnico.Repositories;
using TesteTecnico.Repositories.Interfaces;
using TesteTecnico.Services;
using TesteTecnico.Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseInMemoryDatabase("LivrosDB"));

builder.Services.AddScoped<ILivroRepository, LivroRepository>();
builder.Services.AddScoped<ILivroService, LivroService>();

var app = builder.Build();


app.UseCors();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
