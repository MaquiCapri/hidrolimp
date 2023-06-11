import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Producto } from 'src/app/producto.model';
import { ImageProcessingService } from 'src/app/service/image-processing.service';
import { ServicesService } from 'src/app/service/services.service';
import { ProductoDetalleComponent } from '../producto-detalle/producto-detalle.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
   
  listaProd: Producto[] = [];
  categorias = true;
  productDetails=[];

   //  paginacion
   page_size:number= 5
   page_number:number=1
   pageSizeOptions = [5, 10, 20]
 
  constructor(private imageProcessingService:ImageProcessingService,
    private service: ServicesService,
     private router: Router,
     public param: ActivatedRoute,private imagesDialog: MatDialog,) { }

  ngOnInit(): void {
     this.obtenerProductosPorCategoria();
  }

       public obtenerProductosPorCategoria(){
        let id = this.param.snapshot.paramMap.get('id');
           console.log(id)
           this.service.obtenerProductosPorCategoria(id)
           .pipe(
                 map((x: Producto[],i) => x.map((producto: Producto) => this.imageProcessingService.createImages(producto)))
               )
           .subscribe(
             (resp: Producto[]) => {
               console.log(resp);
               this.productDetails = resp;
             },(error:HttpErrorResponse)=>{
               console.log(error);
             }
           );
        } 

        showImages(producto:Producto){
          console.log(producto);
          this.imagesDialog.open( ProductoDetalleComponent,{
            data:{
            images:producto.productImages,
            nombre:producto.nombre,
            descripcion:producto.descripcion,
            precio:producto.precio 
            },
            height: '300px',
            width: '300px' } );
         }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
    }
   
}
  

    //   let id = this.param.snapshot.paramMap.get('id');
    //   console.log(id)
    //   this.service.obtenerProductosPorCategoria(id)
    //   .pipe(
    //     map((x: Producto[],i) => x.map((producto: Producto) => this.imageProcessingService.createImages(producto)))
    //   )
    //  .subscribe(
    //    (resp:Producto[]) => {
    //     this.productosCategoria = resp;
    //    console.log(resp);
    //  },(error: HttpErrorResponse)=> {
    //    console.log(error);
    //  });
      
     
     //.subscribe(
       //data=> {
         //this.productosCategoria = data;
      // this.totalProduct = data.lenght;
        // console.log( data)
      //}
      //);