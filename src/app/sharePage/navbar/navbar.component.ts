import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 ocultar1= true;

  constructor() { }

  ngOnInit(): void {
  }
  
  ocultar(){
this.ocultar1=false;
  }

 mostrar(){
this.ocultar1=true;
console.log(this.ocultar1)

 }
}
