import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../producto.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

URL = 'http://localhost:8890/producto/';
url = 'http://localhost:8890/category/'; 
  constructor(private http: HttpClient) { }

   public getProducto(id: any):Observable<Producto>{
     return this.http.get<Producto>(this.URL + `traer/${id}`);
    }

    public lista(): Observable<Producto[]>{
      return this.http.get<Producto[]>(this.URL + 'trae');
    }
    
    public getCategory(id: any):Observable<any>{
      return this.http.get<any>(this.url + `${id}`);
     }
   
}
