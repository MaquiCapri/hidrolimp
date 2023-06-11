import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//componentes:
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NavbarComponent } from './sharePage/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaProductoComponent } from './pages/lista-producto/lista-producto.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './sharePage/footer/footer.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';
import { HttpClientModule } from '@angular/common/http';
import { ObjToArrayPipe } from './objToArray.pipe';
import { SignupComponent } from './pagesLogin/signup/signup.component';
import { LoginComponent } from './pagesLogin/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { CrearProductoComponent } from './pages/lista-producto/crear-producto/crear-producto.component';
import { DragDirective } from './drag.directive';
import { ProductoDialogComponent } from './pages/lista-producto/producto-dialog/producto-dialog.component';
import { AlertDialogComponent } from './pages/lista-producto/alert-dialog/alert-dialog.component';
import { PaginatePipe } from './pipes/paginate.pipe';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomMatPaginatorIntl } from './paginator-es';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    AboutComponent,
    ContactoComponent,
    NavbarComponent,
    ListaProductoComponent,
    FooterComponent,
    ProductoDetalleComponent,
    ObjToArrayPipe,
    SignupComponent,
    LoginComponent,
    CrearProductoComponent,
    DragDirective,
    ProductoDialogComponent,
    AlertDialogComponent,
    PaginatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [
     interceptorProvider,
     
    {provide: MatPaginatorIntl,
       useClass: CustomMatPaginatorIntl}
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
