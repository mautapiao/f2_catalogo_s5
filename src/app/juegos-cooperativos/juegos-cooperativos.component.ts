import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardJuegoComponent } from '../components/card-juego/card-juego.component';
import { CatalogoService } from '../services/catalogo.service';
import { Juego } from '../interfaces/juego';

@Component({
  standalone: true,
  selector: 'app-juegos-cooperativos',
  imports: [CardJuegoComponent, CommonModule],
  templateUrl: './juegos-cooperativos.component.html',
  styleUrl: './juegos-cooperativos.component.css'
})
export class JuegosCooperativosComponent {

  juegos: Juego[] = [];

  constructor(private catalogoService: CatalogoService) {

    this.juegos = this.catalogoService.getJuegosCatalogos()
      .filter(fila => fila.categoria === 'cooperativos');
  }


}
