import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged = false;
  ocultar1 = true;
  isLogginFail = false;

  constructor( private authService: AuthService,private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
     }

  irLogin() {
    this.router.navigate(['login']);
    this.isLogged = true;
  }

  onlogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
    this.isLogged = false;
  }

  ocultar() {
    this.ocultar1 = false;
  }

  mostrar() {
    this.ocultar1 = true;
    // console.log(this.ocultar1)
  }

}
