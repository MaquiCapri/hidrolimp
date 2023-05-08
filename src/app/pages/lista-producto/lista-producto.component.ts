import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';
import { Producto } from '../../producto.model';
import { CrudProductoService } from 'src/app/service/crud-producto.service';
import { TokenService } from 'src/app/service/token.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {
  // paginacion
  displayedColumns: string[] = ['nombre', 'precio', 'categoria','editar','eliminar'];
  dataSource!: MatTableDataSource<any>;
  listaProd: Producto[] = [];
  isLogged = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private snack:MatSnackBar, categoriaService: CategoriaService, private crudservice: CrudProductoService, private tokenService: TokenService, private service: ServicesService, private router: Router, public param: ActivatedRoute) { }

  ngOnInit(): void {
    this.productosLista();
    this.ngAfterViewInit();
    //this.cargarProducto();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    //si estamos logeados o no
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  productosLista() {
    this.service.lista().subscribe((data) => {
      this.listaProd = data;
      this.dataSource = new MatTableDataSource(this.listaProd);

      console.log(this.listaProd);
    });
  };

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  cargarProducto(): void {
    this.service.lista().subscribe(data => { this.listaProd = data; });
  }

 eliminarProducto(id: number) {
    if (id != undefined) {
      this.service.eliminarProducto(id).subscribe(
        data => {
          this.cargarProducto();
            this.snack.open('Se eliminó correctamente','Aceptar',{
              verticalPosition: 'top',
              horizontalPosition: 'center',
             
           });
         
           this.router.navigate([''])
              return;
           })
    }
  }

  irCrear(){
    this.router.navigate(['crear']);
  }
  
  }




