import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../producto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudProductoService {
  urlProducto = 'http://localhost:8890/';  

  constructor(private http: HttpClient) { }

  public lista(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.urlProducto + 'producto/trae');
  }
  
  public detail(id: number): Observable<Producto>{
    return this.http.get<Producto>(this.urlProducto + `detail/${id}`)
  }
  // /producto/traer/id
  public save(producto: Producto): Observable<any>{
    return this.http.post<any>(this.urlProducto + 'producto/crear', producto);
  }
  
  public update(id: number, producto: Producto): Observable<any>{
    return this.http.put<any>(this.urlProducto + `update/${id}`, producto);
  }
  
  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.urlProducto + `borrar/${id}`);
  } 
}
