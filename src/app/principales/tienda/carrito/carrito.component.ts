import { Component } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  constructor(private carrito:CarritoService){}

  getCart(){
    return this.carrito.getCart();
  }

}
