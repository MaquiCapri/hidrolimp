import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, debounceTime, distinct, filter, fromEvent, map, switchMap, tap } from 'rxjs';
import { Producto } from 'src/app/producto.model';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  category: any[]= [];
  
   prod: Producto[] = [];
 @ViewChild('productoSearchInput', {static : true}) productoSearchInput!: ElementRef
  productos$!: Observable<any>
   
constructor(private categoriaService: CategoriaService, private service: ServicesService,private router: Router) { }

  
ngOnInit(): void {
  //  this.productos$ = fromEvent<Event>(this.productoSearchInput.nativeElement, 'keyup').pipe(
  //    map((event: Event) => {
  //      const searchTerm =(event.target as HTMLInputElement).value;
  //      return searchTerm
  //    }),
  //    filter((searchTerm: string) => searchTerm.length > 3),
  //    debounceTime(500),
  //    distinct(),
  //    switchMap((searchTerm: string) =>this.service.getProductoNombre(searchTerm)),
  //    tap((searchTerm: any) => console.log(searchTerm))
  // )
  }

  irProductos(){
      this.router.navigate(['productos']);
  }

  todosProductos() {
    this.categoriaService.getCategoryBy('id').subscribe((data: any) => {
      this.category = data;

      console.log(this.category);
     
    });

    // getTheme(searchTerm: string) {
    //   this.datosWiki.getTheme(searchTerm).subscribe(data => {
    //     this.themes = data;
    //     if (this.themes.length == 0) {
    //       this.showAlert4 = true;
    //     } else {
    //       this.searchTerm = searchTerm;
  
    //       this.router.navigate(['busqueda/' + this.searchTerm]);
    //     }
    //     console.log(searchTerm);
        
  
    //   });
  }
}
