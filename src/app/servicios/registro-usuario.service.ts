import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistroUsuario } from '../clases/registro-usuario';
import { Login } from '../clases/login';

@Injectable({
  providedIn: 'root'
})
export class RegistroUsuarioService {

  private url:string='http://localhost:8080/usuarios'
  private loginUrl: string = `${this.url}/login`;
  constructor(private http:HttpClient) { }

  getUsuarioList():Observable<RegistroUsuario[]>{
    return this.http.get<RegistroUsuario[]>(this.url)
  }

  getUsuario(id:number):Observable<RegistroUsuario>{
    return this.http.get<RegistroUsuario>(`${this.url}/${id}`);
  }
  createUsuario(data: RegistroUsuario): Observable<RegistroUsuario>{
    const headers= new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<RegistroUsuario>(this.url, data,{headers});
  } 

  login(data:Login): Observable<RegistroUsuario> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<RegistroUsuario>(this.loginUrl, data, { headers });
  }
}
