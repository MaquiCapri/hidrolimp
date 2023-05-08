import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  // inicializamos en un array vacia a roles
  roles: string[] = [];
  errMsj!: string;
  
  constructor(private router: Router, private tokenService: TokenService, private authService: AuthService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      //si esta logeado trae un token
      this.isLogged = true;
      //si estas logaedo no fallo sigue false
      this.isLogginFail = false;
      //se guarda en la variable roles lo que traigas de token...
      this.roles = this.tokenService.getAuthorities();
    }
    
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(data => {
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.router.navigate([''])
    }, err => {
      this.isLogged = false;
      this.isLogginFail = true;
      this.errMsj = err.error.mensaje;
      console.log(this.errMsj);

    })
  }
 

}
