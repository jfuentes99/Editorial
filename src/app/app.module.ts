import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ScrapingService } from './services/scraping.service';


import { NavBarComponent } from './principales/nav-bar/nav-bar.component';
import { FooterComponent } from './principales/footer/footer.component';
import { InicioComponent } from './principales/inicio/inicio.component';
import { BloqueCentralComponent } from './principales/inicio/bloque-central/bloque-central.component';
import { BloqueDerechaComponent } from './principales/inicio/bloque-derecha/bloque-derecha.component';
import { ArticulosComponent } from './principales/tienda/articulos/articulos.component';
import { CarritoComponent } from './principales/tienda/carrito/carrito.component';
import { LoginComponent } from './login/login.component';
import { ArticuloTarjetaComponent } from './principales/tienda/articulos/articulo-tarjeta/articulo-tarjeta.component';
import { ArticuloCarritoComponent } from './principales/tienda/carrito/articulo-carrito/articulo-carrito.component';
import { ArticuloDetalleComponent } from './principales/tienda/articulos/articulo-detalle/articulo-detalle.component';
import { BuscadorPipe } from './filtros/pipes/buscador.pipe';
import { PipeorganismosPipe } from './filtros/pipeorganismos.pipe';
import { PipeprovinciasPipe } from './filtros/pipeprovincias.pipe';
import { PipecomunidadesPipe } from './filtros/pipecomunidades.pipe';
import { SliderComponent } from './principales/inicio/bloque-central/slider/slider.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    InicioComponent,
    BloqueCentralComponent,
    BloqueDerechaComponent,
    ArticulosComponent,
    CarritoComponent,
    LoginComponent,
    ArticuloTarjetaComponent,
    ArticuloCarritoComponent,
    ArticuloDetalleComponent,
    BuscadorPipe,
    PipeorganismosPipe,
    PipeprovinciasPipe,
    PipecomunidadesPipe,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
ReactiveFormsModule,
HttpClientModule,
  ],
  providers: [ScrapingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
