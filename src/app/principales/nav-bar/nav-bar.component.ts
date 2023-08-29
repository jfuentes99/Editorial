import { Component, OnInit } from '@angular/core';
import { ArticuloService } from 'src/app/services/articulos/articulo.service';
import { LoginService } from 'src/app/services/auth/login.service';
import {ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
name:String="Editorial La Española";
filtroNom:String="";

//sessionStorage
userLoginOn:boolean=false;

defaultName:String="Jose Antonio Fuentes";
userName:String= 'No registrado';
userData:any="";


constructor(private login:LoginService, private bd:ArticuloService, private router:Router, private carrito:CarritoService){

}

addUser():String{
  if(localStorage.length==0){
return this.userName;
  }else {}
return localStorage.getItem('login') || "[]"
}

ngOnInit():void{
  // this.login.userLoginOn.subscribe({
  //   next:(userLoginOn)=>{
  //     this.userLoginOn=userLoginOn;

  //   }
  // });
  // this.login.userData.subscribe({
  //   next:(userData)=>{
  //     this.userData=userData;

  //   }
  // });
}

a:String="";
// Uso del decorador @ViewChild('aqui va lo que hayas definido en el html con el #') variable: ElementRef
@ViewChild('imgElement')
imgElement:any


//Cabecera. Modo oscuro
setThema() {
   document.documentElement.classList.toggle('dark') //para un solo boton
   document.documentElement.classList.toggle('active');
}

//Buscador funcionando, falta bajar desplegar divs abajo con los resultados
articulosGet():Array<any>{
  return this.bd.articulos;
}
public detalles(articulos:any) {
  this.router.navigate(["tienda/articulos", articulos.id])
}

//articulos carrito
showArticulos():number{
if (this.carrito.isCarrito()) {
  return 0;
} else {
  return this.carrito.getCart().length;
}}
}
