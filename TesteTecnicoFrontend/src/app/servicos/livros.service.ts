import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../modelos/Livro';
import { LivroDto } from '../modelos/DTOs/LivroDto';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {
  private baseUrl: string = 'https://localhost:7227/api/livros';  // Substitua pelo seu endpoint real

  constructor(private http: HttpClient) { }

  getLivros(): Observable<Livro[]> {
    return this.http.get<any>(this.baseUrl);
  }

  getLivro(id: string): Observable<Livro> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  addLivro(livro: LivroDto): Observable<Livro> {
    return this.http.post<any>(this.baseUrl, livro);
  }

  editLivro(id: string, livro: LivroDto): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, livro);
  }

  deleteLivro(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
