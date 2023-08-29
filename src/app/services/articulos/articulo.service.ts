import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {


provincias = ['Alava','Albacete','Alicante','Almeria','Asturias','Avila','Badajoz','Barcelona','Burgos','Caceres',
'Cadiz','Cantabria','Castellon','Ciudad Real','Cordoba','La Coruña','Cuenca','Gerona','Granada','Guadalajara',
'Guipuzcoa','Huelva','Huesca','Islas Baleares','Jaen','Leon','Lerida','Lugo','Madrid','Malaga','Murcia','Navarra',
'Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
'Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza']
comunidades = ["Andalucia", "Aragón", "Canarias", "Cantabria", "Castilla y Leon", "Castilla-La Mancha", "Cataluña",
"Ceuta", "Comunidad Valenciana", "Comunidad de Madrid", "Extremadura", "Galicia", "Islas Baleares", "La Rioja",
"Melilla", "Navarra", "Pais Vasco", "Principado de Asturias", "Region de Murcia"]
organismos = ["Servicios de Salud", "Ministerio del Interior","ADIF", "Universidades", "Ayuntamientos", "CC.AA",
 "Provinciales", "Ministerio de Cultura", "Ministerio de Defensa", "Ministerio de Hacienda"]
articulos =[{
"id":1,
"provincias":"Murcia",
"comunidades":"Region de Murcia",
"organismos":"Servicios de Salud",
"nombre":"Celador para el Servicio Murciano de Salud",
"precio":39,
"imagen":"../../../../assets/icons/galleta.png",
"stock":true,
},{
"id":2,
"provincias":"Murcia",
"comunidades":"Region de Murcia",
"organismos":"Servicios de Salud",
"nombre":"Auxiliar administrativo Servicio Murciano de Salud",
"precio":39,
"imagen":"../../../../assets/icons/galleta.png",
"stock":false,
},{
"id":3,
"provincias":"Murcia",
"comunidades":"Region de Murcia",
"organismos":"Servicios de Salud",
"nombre":"Ayudante de Cocina Servicio Murciano de Salud",
"precio":39,
"imagen":"../../../../assets/icons/galleta.png",
"stock":false,
},{
  "id":4,
  "provincias":"Albacete",
  "comunidades":"Castilla-La Mancha",
  "organismos":"Ministerio de Cultura",
  "nombre":"Consejero de cultura para el Ministerio de Cultura",
  "precio":45,
  "imagen":"../../../../assets/icons/galleta.png",
  "stock":true,
  }]

  constructor() { }


  getProvincias():Array<any> {
    return this.provincias
  }

  getComunidades():Array<any> {
    return this.comunidades
  }

  getOrganismos():Array<any> {
    return this.organismos
  }
  getArticulos():Array<any> {
    return this.articulos
  }
  obtenerProductoPorId(id:any) {
    return  this.articulos[id-1];
  }

}
