import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/category.model';
import { Producto } from 'src/app/producto.model';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ServicesService } from 'src/app/service/services.service';


@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  // producto: Producto = new Producto();
  producto: any = {};
  categorias: Category[] = [];

  constructor(private snack:MatSnackBar, private router: Router, private categoriaService: CategoriaService, private service: ServicesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.categoriaService.listaCategoria().subscribe(response => {
      this.categorias = response;
      console.log(this.categorias)
    });

    this.activatedRoute.params
      .subscribe(params => {
        let id: number = params['id']
        if (id) {
          this.service.getProducto(id)
            .subscribe(response => this.producto = response);
        }
      });
  }

  guardarProducto() {
    this.service.guardarProducto(this.producto).subscribe(response =>
      this.snack.open('Se guardó correctamente','Aceptar',{
        verticalPosition: 'top',
        horizontalPosition: 'right',
    }
    ));
    this.router.navigate(['']);

  }

  actualizarProducto(){
    this.service.actualizarProducto(this.producto).subscribe(response =>
      this.snack.open('Se editó correctamente','Aceptar',{
        verticalPosition: 'top',
        horizontalPosition: 'right',
    }
    ));
    this.router.navigate(['']);
  }

  //para que categoria aparesca en el formulario cuando queremos editar
  compararCategoria(o1: Category, o2: Category): boolean{
    if(o1 === null && o2 === undefined) return true;
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false: o1.id == o2.id;
  }

  irLista(){
    this.router.navigate(['lista'])
   }
 
}
