import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/producto.model';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  categorias = true;

  //  paginacion
  getMenuCategoria: any;
  p: number = 1;
  itemsPerPage: number = 6;
  totalProduct: any;
//iteracion:
  productos: any;
  cate: any;
  productosCategoria : Producto[]=[];
 
  constructor(private categoriaService: CategoriaService, private service: ServicesService, private router: Router, private activatedRoute: ActivatedRoute, public param: ActivatedRoute) { }

  ngOnInit(): void {
    //this.productoTrae();
  
      let id = this.param.snapshot.paramMap.get('id');
      console.log(id)
      this.service.obtenerProductosPorCategoria(id).subscribe(
       data=> {
         this.productosCategoria = data;
      // this.totalProduct = data.lenght;
         console.log( data)
      }
      );
  }

   productoTrae() {
     this.service.lista().subscribe((data) => {
       this.productosCategoria  = data;
    //  if (this.productosCategoria.category =="1") {
    //      alert("si");
    //    }else{
    //     alert("no");

    //   }
        
        console.log(this.productosCategoria);
      });
     }
  
}
// if (this.theme.length ==0) {
      //   this.alert5 = true;
      //       }
        //  if(this.(searchTerm)){
        //  this.themes= [];
        // console.log(searchTerm.lenght);
      // }else {
      //  alert("esta vacio ");
        // }

        // console.log(this.theme);
    
        // console.log(searchTerm.lenght);