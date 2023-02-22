import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from 'src/app/service/services.service';
import { Producto } from '../../producto.model';


@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {
  productData: any;
  displayedColumns: string[] = ['nombre', 'precio'];
  dataSource: MatTableDataSource<Producto>;
  
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog,private service: ServicesService ) {
    this.productData = this.service.Productos;
    this.dataSource = new MatTableDataSource(this.productData);
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator._intl.itemsPerPageLabel = "Items por página"
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
  }

  // addEditPersona() {

  //   const dialogRef = this.dialog.open(AgregarEditarPersonaComponent, {
  //     width: '650px;'
  //     // data: {name: this.name, animal: this.animal},
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     // this.animal = result;
  //   });
  // }
}
