import { HttpErrorResponse, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/category.model';
import { FileHandle } from 'src/app/model/file-handle.model';
import { Producto } from 'src/app/producto.model';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ServicesService } from 'src/app/service/services.service';
import { UploadFilesService } from 'src/app/service/upload-files.service';


@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  categorias: Category[] = [];

  producto: Producto ={
    id: 0,
    nombre: "",
    precio: "",
    descripcion: "",
    category: "",
    productImages: []
  }


  constructor(private sanitizer: DomSanitizer,
    private snack: MatSnackBar, private router: Router,
    private categoriaService: CategoriaService,
    private service: ServicesService,
    private activatedRoute: ActivatedRoute,
    private uploadFileService: UploadFilesService) { }

  ngOnInit(): void {
    //para traer categorias
    this.categoriaService.listaCategoria().subscribe(response => {
      this.categorias = response;
      console.log(this.categorias)
    });

    //para editar
    this.producto = this.activatedRoute.snapshot.data['producto'];
    
  }

  //para que categoria aparesca en el formulario cuando queremos editar
  compararCategoria(o1: Category, o2: Category): boolean {
    if (o1 === null && o2 === undefined) return true;
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false : o1.id == o2.id;
  }

  volverLista() {
    this.router.navigate(['lista']);
  }

  //te redirecciona a otra pagina pero actualizada
  redirectToOtherPage() {
    const otherPageUrl = '/lista';
    this.router.navigateByUrl(otherPageUrl, { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl(otherPageUrl);
    });
  }

  //guardar producto
  addProduct(productForm: NgForm) {
    const productFormData = this.prepareFormData(this.producto);
    this.service.addProduct(productFormData).subscribe(
      (response: Producto) => {
        this.snack.open('Se guardó correctamente', 'Aceptar', {
          verticalPosition: 'top',
          horizontalPosition: 'right',
        })
        productForm.reset();
        this.producto.productImages = [];
      }, (error: HttpErrorResponse) => {
         console.log(error);
          this.snack.open('Verifique que todo este completado correctamente', 'Aceptar', {
            verticalPosition: 'top',
            horizontalPosition: 'right',
        })
  })
}

  //para imagen
  prepareFormData(producto: Producto): FormData {
    const formData = new FormData();

    formData.append(
      'producto',
      new Blob([JSON.stringify(producto)], { type: 'application/json' })
    );

    for (var i = 0; i < producto.productImages.length; i++) {
      formData.append(
        'imageFile',
        producto.productImages[i].file,
        producto.productImages[i].file.name
      );
    }
    return formData;
  }

  //para imagen
  onFileSelected(event) {
    console.log(event);
    if (event.target.files) {
      const file = event.target.files[0];

      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }
      this.producto.productImages.push(fileHandle);
    }
  }
  //para imagen
  removeImages(i: number) {
    this.producto.productImages.splice(i, 1);
  }
  //para imagen
  fileDropped(fileHandle: FileHandle) {
    this.producto.productImages.push(fileHandle);
  }

}
