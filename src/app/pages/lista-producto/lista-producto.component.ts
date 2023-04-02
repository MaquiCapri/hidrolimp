import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';
import { Producto } from '../../producto.model';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {
  // paginacion
  displayedColumns: string[] = ['nombre', 'precio','categoria'];
  dataSource!: MatTableDataSource<any>;
  listaProd: Producto[] = [];
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private service: ServicesService, private router: Router, public param: ActivatedRoute) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  retri() {
    this.service.lista().subscribe((data) => {
      this.listaProd = data;
      this.dataSource = new MatTableDataSource(this.listaProd);

      console.log(this.listaProd);
    });
  };

  ngOnInit(): void {
    this.retri();
    this.ngAfterViewInit()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
