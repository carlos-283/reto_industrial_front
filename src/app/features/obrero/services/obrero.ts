import { Injectable } from '@angular/core';
import { Obrero } from '../models/obrero';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { environment } from '../../../../enviroment';

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

  getOneObrero(id: number): Observable<any>  {
    return this.http.get(this.apiUrl+"/obreros/"+id);
  }

  addObrero(obrero: Obrero): Observable<Obrero>{
    return this.http.post<Obrero>(this.apiUrl+"/obreros", obrero);
  }

  updateObrero(updatedObrero: Obrero): Observable<Obrero> {
    return this.http.put<Obrero>(this.apiUrl+"/obreros/"+updatedObrero.id, updatedObrero);
  }

  deleteObrero(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + "/obreros/" + id);
  }

}
