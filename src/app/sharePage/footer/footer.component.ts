import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/producto.model';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  constructor(private router: Router,private service: ServicesService) { }

  ngOnInit(): void {
    
  }

 
}
