import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/producto.model';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  category: any[]= [];
  
  constructor(private service: ServicesService,private router: Router) { }

  
ngOnInit(): void {
  }

  irProductos(){
      this.router.navigate(['productos']);
  }

  todosProductos() {
    this.service.getCategory('id').subscribe((data: any) => {
      this.category = data;

      console.log(this.category);
     
    });
  }
}
