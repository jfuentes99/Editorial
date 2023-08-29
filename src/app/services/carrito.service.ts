import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

private articulos: Array<any> = [];

constructor() {
    //localStorage
    let savedFavs = localStorage.getItem('articulo') || "[]"
    this.articulos = JSON.parse(savedFavs)
  }

  addToCart(articulo: any): void {
    articulo.units = 1;
    this.articulos.push(articulo);
    localStorage.setItem('articulo', JSON.stringify(this.articulos))
  }

  isInCart(articulo: any): boolean {
    return this.articulos.includes(articulo);
  }

  addUnits(articulo: any, newUnits: number = 1) {
    //el = significa por defecto
    let art = this.articulos.find((a) => a.id == articulo.id); //devuelve el objeto
    if (art) art.units += newUnits;
    console.log(this.articulos);
  }

  getCart(){
    return this.articulos;
  }

  decUnits(articulo:any, units:number =1){
    let art = this.articulos.find((a) => a.id == articulo.id); //devuelve el objeto
    if(art.units >= units){
art.units-=1;
    }
  }
  isCarrito():boolean{
    return this.articulos.includes('');
  }
  borrarArticulo(){
    this.articulos.shift();
    localStorage.removeItem('articulo');
  }

  //cuando cerramos sesion
clearStorage():void{
  try{
localStorage.clear();

  }catch(error){
console.log(error)

  }
}


}
