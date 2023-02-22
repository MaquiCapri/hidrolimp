import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
