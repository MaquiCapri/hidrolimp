import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/category.model';
import { Producto } from 'src/app/producto.model';
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
  itemsPerPage: number = 8;
  totalProduct: any;
//iteracion:
  productos: any;
  cate: any;
  productosCategoria : any=[];
 
  constructor(private service: ServicesService, private router: Router, private activatedRoute: ActivatedRoute, public param: ActivatedRoute) { }

  ngOnInit(): void {
   
    let id = this.param.snapshot.paramMap.get('id');
    console.log(id)
    this.service.getCategory(id).subscribe(
     data=> {
       this.cate=data;
       this.productosCategoria = data.productos;
    this.totalProduct = data.lenght;

       console.log( data.productos)
    }
    );
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