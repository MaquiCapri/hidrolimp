import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  url = 'http://localhost:8890/category/'; 

  constructor(private http: HttpClient) { }

   public listaCategoria(): Observable<Category[]>{
     return this.http.get<Category[]>(this.url + 'trae');
   }
  
   public getCategoryBy(id: any):Observable<any>{
     return this.http.get<any>(this.url + `${id}`);
    }

    public guardarCategory(): Observable<Category[]>{
      return this.http.get<Category[]>(this.url + 'guardar');
    }
}
