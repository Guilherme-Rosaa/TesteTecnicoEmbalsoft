import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarregamentoService {

  private carregando = new BehaviorSubject<boolean>(false);
  eventoCarregando: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  definirCarregando(estado: boolean): void {
    this.carregando.next(estado);
    this.eventoCarregando.emit(estado);
  }

  obterCarregando(): BehaviorSubject<boolean> {
    return this.carregando;
  }
}
