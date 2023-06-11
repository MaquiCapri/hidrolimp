import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Producto } from './producto.model';
import { Observable, map, of } from 'rxjs';
import { ServicesService } from './service/services.service';
import { ImageProcessingService } from './service/image-processing.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveService implements Resolve<Producto> {

  constructor(private service: ServicesService,private imagenService: ImageProcessingService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Producto>{

    const id= route.paramMap.get("id");

    if(id){
return this.service.getProducto(id)
.pipe(
  map(p => this.imagenService.createImages(p))
)
    }else{
      return of(this.getProductDetails());
    }
  }

  getProductDetails(){
    return{
      id:0,
      nombre: "",
      precio: "",
      descripcion: "",
      category: "",
      productImages: []
    }
  }
}
