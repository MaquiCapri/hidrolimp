import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 isLog = false;
 
 ocultar1= true;
  constructor(private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    this.loggin();
  }
loggin(){
  if (this.tokenService.getToken()) {
    this.isLog = true;
  } else {
    this.isLog = false;
  }
}

  irLogin() {
    this.router.navigate(['login']);
  }

  onlogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

   ocultar(){
 this.ocultar1=false;
   }

  mostrar(){
 this.ocultar1=true;
 console.log(this.ocultar1)

  }
}
