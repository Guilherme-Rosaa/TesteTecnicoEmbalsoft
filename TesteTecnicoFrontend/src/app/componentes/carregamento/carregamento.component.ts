import { Component } from '@angular/core';
import { CarregamentoService } from 'src/app/servicos/carregamento.service';

@Component({
  selector: 'app-carregamento',
  templateUrl: './carregamento.component.html',
  styleUrls: ['./carregamento.component.scss']
})
export class CarregamentoComponent {
  carregando: boolean = false;

  constructor(private carregamentoService: CarregamentoService) {
    this.carregamentoService.obterCarregando().subscribe((carregando: boolean) => {
      this.carregando = carregando;
    });
  }
}
