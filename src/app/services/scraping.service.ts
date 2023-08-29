import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class ScrapingService {
  public pruebaUrl='https://my-json-server.typicode.com/luismiguel-fernandez/angular2022/fabricantes'; //si funciona
 public URL = "https://mad.es/";
 respuesta={}
 private vehiculos:any

constructor(private http:HttpClient) { }




getVehiculos():Array<any> {
  if (!this.vehiculos) {
    this.http.get(this.pruebaUrl).subscribe(
      (response:any) => {
        this.vehiculos = response
        console.log('Hola')
        console.log(this.vehiculos)
      }
    )
  }
  return this.vehiculos
}


}


// getPHP(){
//   //  return this.http.get(`${this.rutaApi}/obtenerPersonas.php`); suena interesante para bifurcaciones
// this.http.get(this.URL).subscribe((response)=>{
// this.respuesta=response;
// console.log(this.respuesta)
//   },err=>{
//     console.log(err);
//   },()=>{
//     console.log('completed');
//   }
// )}

// getUrl(){ //Problema de AXIOS, no se si por CORS, o por los headers
//   console.log('empieza Scraping');
//  //o buscar con https:
// var respose= axios.get(this.URL,{

// }).then(response=>{
// let html=response.data;
// console.log(html)
// }).catch(error=> {

// console.log(error);
// }).finally(function () {
// console.log('Nada')

// });

// return respose
// }


// async getAlgo(){
// async()=>{
//   try{
// const URL='http://mad.es';
// const response= await axios.get(URL);
// console.log(response.config)
//   }catch(error){
//     console.log(error)
//   }
// }
//   const url = 'https://mad.es';
//   const requestPromise = require('request-promise');
// requestPromise(url)
// .then((html:any) => {
//    ///success!
//   console.log(html);
// })
// .catch((error:any) => {
//   ///handling error
//   console.log(error);
// });
// }
