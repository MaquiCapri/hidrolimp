import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ServiceUsuarioService } from 'src/app/service/service-usuario.service';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    nombreUsuario: '',
    password: '',
    nombre: '',
    email: '',
  }

  constructor(private router: Router, private service: ServicesService, private serviceUsuario: ServiceUsuarioService, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.user);
    this.serviceUsuario.añadirUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        this.snack.open('El usuario fue guardado con éxito', 'Aceptar', {
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
        this.router.navigate([''])
      }, (error) => {
        console.log(error);
        this.snack.open('Ha ocurrido un error en el sistema', 'Aceptar', {
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });

      })
  }

}
 //  if(this.user.nombreUsuario == '' || this.user.nombreUsuario == null){
    //   this.snack.open('El nombre de usuario es requerido','Aceptar',{
    //     verticalPosition: 'top',
    //     horizontalPosition: 'right'
    //   });
    //    return;
    //  }  