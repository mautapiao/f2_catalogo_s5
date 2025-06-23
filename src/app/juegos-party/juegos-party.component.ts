import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardJuegoComponent } from '../components/card-juego/card-juego.component';
import { CatalogoService } from '../services/catalogo.service';
import { Juego } from '../interfaces/juego';

@Component({
  standalone: true,
  selector: 'app-juegos-party',
  imports: [CardJuegoComponent,CommonModule],
  templateUrl: './juegos-party.component.html',
  styleUrl: './juegos-party.component.css'
})
export class JuegosPartyComponent {

 juegos: Juego[] = [];

  constructor(private catalogoService: CatalogoService) {

    this.juegos = this.catalogoService.getJuegosCatalogos()
      .filter(fila => fila.categoria === 'party');
  }

}
