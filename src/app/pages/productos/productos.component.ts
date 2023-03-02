import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  // productData: any;
  // categorias = true;
 getMenuCategoria: any;
 menuData: any;

  constructor(private service: ServicesService,public param: ActivatedRoute) {}

  ngOnInit(): void {
    // this.productData = this.service.Productos;
      // console.log(this.productData)
  // }
this.getMenuCategoria = this.param.snapshot.paramMap.get('categoria');
console.log(this.getMenuCategoria,'getmenu')
if(this.getMenuCategoria){
  this.menuData = this.service.Productos.filter((value)=>{
    return value.categoria == this.getMenuCategoria;
  });
console.log(this.menuData,'getmenu')

}
}
}
