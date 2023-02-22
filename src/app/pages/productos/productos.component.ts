import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productData: any;

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.productData = this.service.Productos;

  }

}
