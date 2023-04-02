import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/producto.model';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  
  prod: any=[];
 
  constructor(private router: Router, public param: ActivatedRoute, private service: ServicesService, private http: HttpClient) { 
}

  ngOnInit(): void {
   let id = this.param.snapshot.paramMap.get('id');
   console.log(id)
   this.service.getProducto(id).subscribe(
     data=> {
      this.prod = data;
      console.log(this.prod)
   }
   );
           
   }

}
