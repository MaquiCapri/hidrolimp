import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../producto.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

URL = 'http://localhost:8890/producto/'; 

  constructor(private http: HttpClient) { }
    //servicios para productos
    public getProducto(id: any):Observable<Producto>{
     return this.http.get<Producto>(this.URL + `traer/${id}`);
    }

    public lista(): Observable<Producto[]>{
      return this.http.get<Producto[]>(this.URL + 'trae');
    }

     guardarProducto(producto: Producto): Observable<Producto>{
       return this.http.post<Producto>(this.URL + 'crear', producto);
    }

    actualizarProducto(producto: Producto): Observable<Producto>{
      return this.http.put<Producto>(this.URL + 'actualizar/'+ producto.id,producto);
    }
   
    eliminarProducto(id: number): Observable<any>{
      return this.http.delete<any>(this.URL + 'eliminar/' + id)
    }

   //categorias
    public obtenerProductosPorCategoria(categoryId: any):Observable<Producto[]>{
      return this.http.get<Producto[]>(this.URL + 'categoria/' + categoryId);
    }


    //para la barra 
    getProductoNombre(searchTerm:string): Observable<Producto[]>{
      return this.http.get<Producto[]>(this.URL + 'nombre/' + searchTerm);
      };
}
