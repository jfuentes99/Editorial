import { Component, OnInit } from '@angular/core';
import { ArticuloService } from 'src/app/services/articulos/articulo.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit{

  filtroOrganismos:string = ""
  filtroProvincias:string = ""
  filtroNom:string = ""
  filtroComunidades:string =""


  ngOnInit(): void {

  }

constructor(private bd:ArticuloService){}

get provinciasGet():Array<any>{
  return this.bd.provincias;
}
get comunidadesGet():Array<any>{
  return this.bd.comunidades;
}
get organismosGet():Array<any>{
  return this.bd.organismos;
}
get articulosGet():Array<any>{
  return this.bd.articulos;
}
reset(){
  this.filtroComunidades="";
  this.filtroOrganismos="";
  this.filtroProvincias="";
}

}
