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
import { MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { ImageProcessingService } from 'src/app/service/image-processing.service';
import { map } from 'rxjs/operators';
import { ProductoDialogComponent } from './producto-dialog/producto-dialog.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {
  // paginacion
  displayedColumns: string[] = ['nombre', 'precio', 'categoria','imagen','editar','eliminar'];
  dataSource!: MatTableDataSource<any>;
  listaProd: Producto[] = [];
  // productDetails: Producto[] = [];

  ocultar: true;

  showAlert=false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private imagenService: ImageProcessingService,
    private imagesDialog: MatDialog, private snack:MatSnackBar, 
    categoriaService: CategoriaService, 
    private crudservice: CrudProductoService, 
    private tokenService: TokenService,
     private service: ServicesService, 
     private router: Router, public param: ActivatedRoute) { }

  ngOnInit(): void {
   this.getAllProducts();
    this.ngAfterViewInit();
    this.cargarProducto();
  }

  getAllProducts() {
    this.service.getAllProducts()
     .pipe(
       map((x: Producto[],i) => x.map((producto: Producto) => this.imagenService.createImages(producto)))
     )
    .subscribe(
      (resp:Producto[]) => {
       this.listaProd = resp;
       this.dataSource = new MatTableDataSource(this.listaProd);

      console.log(resp);
    },(error: HttpErrorResponse)=> {
      console.log(error);
    });
  };


  //paginacion
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
//paginacion
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  cargarProducto(): void {
    this.service.getAllProducts().subscribe(data => { this.listaProd = data; });
  }

 eliminarProducto(id: number) {
  const snackBar = this.imagesDialog.open(AlertDialogComponent);
  snackBar.afterClosed().subscribe(data => {
   console.log("valor respues",data);
  //  id != undefined
     if (data) {
       this.service.eliminarProducto(id).subscribe(
         data => {
            this.cargarProducto();
           this.snack.open('Se eliminó correctamente','Aceptar',{
               verticalPosition: 'top',
               horizontalPosition: 'center',
            });
            this.reloadPage();
                return;
            })
     }
    });
   }

  //te redirecciona a la misma pagina actualizada
  reloadPage(){
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/',{ skipLocationChange:true}).then(() => {
      this.router.navigateByUrl(currentUrl);
    });
  }

  irCrear(){
    this.router.navigate(['crear']);
  }

  irHome(){
    this.router.navigate(['']);
  }

 resetPage(){
  this.router.navigate(['/']);
 }

 //muestra imagenes en mat-dialog
 showImages(producto:Producto){
  console.log(producto);
  this.imagesDialog.open(ProductoDialogComponent,{
    data:{
      images:producto.productImages
    },
    height: '300px',
    width: '300px' } );
 }

 editProductDetails(id){
  console.log(id)
  this.router.navigate(['crear',{id:id}]);
 }
 
  }




 // eliminarProducto1(id: number){
  //   let snackBar = this.snack.open('Se eliminará el producto','Aceptar',{
  //     verticalPosition: 'top',
  //     horizontalPosition: 'center',
  //  });
  //  snackBar.afterDismissed().subscribe(() => {
  //   console.log('alert')
  //   this.eliminarProducto(id);
  //  });
  // }