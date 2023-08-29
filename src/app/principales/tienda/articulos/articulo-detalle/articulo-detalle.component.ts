import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticuloService } from 'src/app/services/articulos/articulo.service';
import { CarritoService } from 'src/app/services/carrito.service';


@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.css']
})
export class ArticuloDetalleComponent implements OnInit {
  public productos = [{
    "id":0,
    "provincias":"",
    "comunidades":"",
    "organismos":"",
    "nombre":"",
    "precio":0,
    "imagen":"",
    "stock":"",
  }];

   id:any;
   provincias:any;
    comunidades:any;
    organismos:any;
    nombre:any;
    precio:any;
    imagen:any;
    stock:any;


    art:any;

  constructor(private route: ActivatedRoute, private bd:ArticuloService, private carrito:CarritoService) {}

  ngOnInit() {
    //sacar el id a traves de URL
    this.route.params.subscribe(params => {
      const id: any = params['id'] || null;
      //devolver articulos
      this.art=this.bd.obtenerProductoPorId(id)
      // this.productos=this.bd.getArticulos();
      // this.id= this.productos[id-1].id;
      // this.nombre=this.productos[id-1].nombre;
      // this.precio=this.productos[id-1].precio;
      // this.stock=this.art.stock;

    });

  }


  addToCart(articulo:any){ //json
    if(this.carrito.isInCart(articulo))
     this.carrito.addUnits(articulo)
      else
      this.carrito.addToCart(articulo);
    }

  // }
  // getProducto(){
  //   return this.idProducto;
  // }

}
