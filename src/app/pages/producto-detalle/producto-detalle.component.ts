import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageProcessingService } from 'src/app/service/image-processing.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  productDetails=[];
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private imagenService: ImageProcessingService) { 
}

  ngOnInit(): void {
    this.receiveImages();
   }

   receiveImages(){
    console.log(this.data);
       }

}
 //  this.getAllProducts();
  //  let id = this.param.snapshot.paramMap.get('id');
  //  console.log(id)
  //  this.service.getProducto(id).subscribe(
  //    data=> {
  //     this.prod = data;
  //     console.log(this.prod)
  //  });
  //  }

  //  irProducto(){
  //   this.router.navigate([''])

    // public getAllProducts(){
        
        //     this.service.getAllProducts()
        //     .pipe(
        //           map((x: Producto[],i) => x.map((producto: Producto) => this.imagenService.createImages(producto)))
        //         )
        //     .subscribe(
        //       (resp: Producto[]) => {
        //         console.log(resp);
        //         this.productDetails = resp;
        //      },(error:HttpErrorResponse)=>{
        //         console.log(error);
        //       }
        //     );
        //  } 