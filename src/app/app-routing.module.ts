import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

import { HomeComponent } from './pages/home/home.component';
import { ListaProductoComponent } from './pages/lista-producto/lista-producto.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { LoginComponent } from './pagesLogin/login/login.component';
import { SignupComponent } from './pagesLogin/signup/signup.component';
import { CrearProductoComponent } from './pages/lista-producto/crear-producto/crear-producto.component';


const routes: Routes = [
  { path: '', component: HomeComponent,pathMatch:'full' },
  { path: 'productos', component: ProductosComponent },
  //{ path: 'productos/:hidrolavadoras', component: ProductosComponent },
  { path: 'producto/:id', component: ProductoDetalleComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'lista', component: ListaProductoComponent },
  { path: 'category/:id', component: ProductosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'crear', component: CrearProductoComponent },
  { path: 'crear/:id', component: CrearProductoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
