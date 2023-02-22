import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ServicesService) { }
productData: any;
  ngOnInit(): void {
    this.productData = this.service.Productos;
  }

}
