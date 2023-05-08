import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceUsuarioService {
  urlUsuario = 'http://localhost:8890/auth'; 

  constructor(private http: HttpClient) { }

   //servicios para usuario
   public añadirUsuario(user:any){
    return this.http.post(this.urlUsuario + '/nuevo', user);
   }
   
}
