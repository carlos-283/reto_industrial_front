import { Component } from '@angular/core';
import { ObreroService } from '../services/obrero'
import { Obrero } from '../models/obrero'

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-obrero',
  templateUrl: './obrero.html',
  styleUrl: './obrero.css',

  standalone: true,
  imports: [CommonModule, FormsModule],
})

export class ObreroComponent {

  obreros: Obrero[] = [];

  nuevoObrero: Obrero = { nombre: '', apellido: '', area: 0 };

  selectedObrero: Obrero | null = null

  constructor(private obreroService: ObreroService) {

  }

  ngOnInit(): void {
    this.loadObreros();
  }


  async loadObreros() {
    try {
      this.obreros = await firstValueFrom(this.obreroService.getObreros());
      console.log( this.obreros)
    }
    catch (e) {
      console.log(e)
    }
  }

  updateObrero() {
    if (this.selectedObrero) {
      this.obreroService.updateObrero(this.selectedObrero);
      this.selectedObrero = null;
      this.loadObreros();
    }
  }

  async deleteObrero(id: number | undefined) {
    if(!id)
      return;
    console.log(id);
    await firstValueFrom(this.obreroService.deleteObrero(id));
    this.loadObreros();
  }



}
