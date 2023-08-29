import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './principales/inicio/inicio.component';
import { ArticulosComponent } from './principales/tienda/articulos/articulos.component';
import { CarritoComponent } from './principales/tienda/carrito/carrito.component';
import { LoginComponent } from './login/login.component';
import { ArticuloDetalleComponent } from './principales/tienda/articulos/articulo-detalle/articulo-detalle.component';

const routes: Routes = [
  { path: "tienda", component: ArticulosComponent },
  { path: "carrito", component: CarritoComponent},
  { path: "login", component: LoginComponent},
  { path: "tienda/articulos/:id", component: ArticuloDetalleComponent},
   { path: "", redirectTo: "/inicio", pathMatch: "full"},
  { path: "inicio", component: InicioComponent },
  { path: "**", component: InicioComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
