import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeprovincias'
})
export class PipeprovinciasPipe implements PipeTransform {

  transform(articulos: Array<any>, filtroProvincias:string):Array<any> {
    if (filtroProvincias == "") return articulos
    else return articulos.filter( a => a.provincias == filtroProvincias );
  }


}
