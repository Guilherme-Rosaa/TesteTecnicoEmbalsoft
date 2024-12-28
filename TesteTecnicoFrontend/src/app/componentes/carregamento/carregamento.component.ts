import { Component } from '@angular/core';
import { CarregamentoService } from 'src/app/servicos/carregamento.service';

@Component({
  selector: 'app-carregamento',
  templateUrl: './carregamento.component.html',
  styleUrls: ['./carregamento.component.scss']
})
export class CarregamentoComponent {
  loading: boolean = false;

  constructor(private carregamentoService: CarregamentoService) {
    this.carregamentoService.getIsLoading().subscribe((isLoading: boolean) => {
      this.loading = isLoading;
    });
  }
}
