import { Component } from '@angular/core';
import { ObreroService } from '../../services/obrero'
import { Obrero } from '../../models/obrero'

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

  obreros: Obrero[] = []

  nuevoObrero: Omit<Obrero, 'id'> = { nombre: '', apellido: '', area: 0 };

  selectedObrero: Obrero | null = null

  constructor(private obreroService: ObreroService) {

  }

  ngOnInit(): void {
    this.loadObreros();
  }


  async loadObreros() {
    try {
      const res = await firstValueFrom(this.obreroService.getObreros());
      console.log(res);
    }
    catch (e) {
      console.log(e)
    }
  }


  addObrero() {
    if (this.nuevoObrero.nombre && this.nuevoObrero.apellido && this.nuevoObrero.area) {

      this.obreroService.addObrero(this.nuevoObrero);
      this.nuevoObrero = { nombre: '', apellido: '', area: 0 };
      this.loadObreros();

    }
  }

  updateObrero() {
    if (this.selectedObrero) {
      this.obreroService.updateObrero(this.selectedObrero);
      this.selectedObrero = null;
      this.loadObreros();
    }
  }

  deleteObrero(id: number) {
    this.obreroService.deleteObrero(id);
    this.loadObreros();
  }



}
