import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardJuegoComponent } from '../components/card-juego/card-juego.component';
import { CatalogoService } from '../services/catalogo.service';
import { Juego } from '../interfaces/juego';

@Component({
  standalone: true,
  selector: 'app-juegos-familiares',
  imports: [CardJuegoComponent, CommonModule],
  templateUrl: './juegos-familiares.component.html',
  styleUrl: './juegos-familiares.component.css'
})
export class JuegosFamiliaresComponent {

  juegos: Juego[] = [];

  constructor(private catalogoService: CatalogoService) {

    this.juegos = this.catalogoService.getJuegosCatalogos()
      .filter(fila => fila.categoria === 'familiares');
  }

}
