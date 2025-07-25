import { Injectable } from '@angular/core';
import { Obrero } from '../models/obrero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroment';

@Injectable({
  providedIn: 'root'
})
export class ObreroService {
  
    private apiUrl = environment.apiUrl;

    private obreros: Obrero[] = [    ];

  private nextId = 3;

  constructor(private http: HttpClient) {}

  getObreros(): Observable<any> {

    return this.http.get(this.apiUrl+"/obreros");

  }

  getObrero(id: number): Obrero | undefined {
    return this.obreros.find(obrero => obrero.id === id);
  }

  addObrero(obrero: Omit<Obrero, 'id'>): void {
    this.obreros.push({ id: this.nextId++, ...obrero });
  }

  updateObrero(updatedObrero: Obrero): void {
    const index = this.obreros.findIndex(obrero => obrero.id === updatedObrero.id);
    if (index !== -1) {
      this.obreros[index] = updatedObrero;
    }
  }

  deleteObrero(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + "/obreros/" + id);
  }

}
