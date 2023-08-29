import { Component, Input } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-articulo-carrito',
  templateUrl: './articulo-carrito.component.html',
  styleUrls: ['./articulo-carrito.component.css']
})
export class ArticuloCarritoComponent {
  @Input() articulo:any={}

  constructor(private cart:CarritoService){}

  decUnits(articulo:any){
    this.cart.decUnits(articulo);
  }
  incUnits(articulo:any){
    this.cart.addUnits(articulo);
  }
  deleteArticulo(){
    this.cart.borrarArticulo();
  }
  }
