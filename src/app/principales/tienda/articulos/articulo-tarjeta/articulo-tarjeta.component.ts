import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-articulo-tarjeta',
  templateUrl: './articulo-tarjeta.component.html',
  styleUrls: ['./articulo-tarjeta.component.css']
})
export class ArticuloTarjetaComponent {
  @Input() articulo:any = [] //Conexion con el padre <articulos>

  constructor(private cart:CarritoService, private router:Router){}


   addToCart(articulo:any){ //json
 if(this.cart.isInCart(articulo))
  this.cart.addUnits(articulo)
   else
   this.cart.addToCart(articulo);
 }
 public detalles() {
  this.router.navigate(["tienda/articulos", this.articulo.id])
}

}
