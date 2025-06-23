import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardJuegoComponent } from '../components/card-juego/card-juego.component';
import { CatalogoService } from '../services/catalogo.service';
import { Juego } from '../interfaces/juego';

@Component({
  standalone: true,
  selector: 'app-juegos-estrategia',
  imports: [CardJuegoComponent, CommonModule],
  templateUrl: './juegos-estrategia.component.html',
  styleUrl: './juegos-estrategia.component.css'
})
export class JuegosEstrategiaComponent {

  juegos: Juego[] = [];

  constructor(private catalogoService: CatalogoService) {

    this.juegos = this.catalogoService.getJuegosCatalogos()
      .filter(fila => fila.categoria === 'estrategia');
  }

}
