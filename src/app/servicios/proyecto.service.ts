import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../clases/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private url:string='http://localhost:8080/proyecto'
  private usuarioUrl: string = `${this.url}/usuario`;
  constructor(private http:HttpClient) { }

  getProyectosList():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.url)
  }

  getProyectosPorUsuario(documento: string): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.usuarioUrl}?documento=${documento}`);
  }

  crearProyecto(data:Proyecto):Observable<Proyecto>{
    const headers=new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<Proyecto>(this.url, data, {headers});
  }
}
