import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ServicesService,private router: Router) { }
productData: any;
  
ngOnInit(): void {
    this.productData = this.service.Productos;
  }

  irProductos(){
      this.router.navigate(['productos']);
    
  }
}
