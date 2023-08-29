import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeorganismos'
})
export class PipeorganismosPipe implements PipeTransform {

  transform(articulos: Array<any>, filtroOrganismos:string):Array<any> {
    if (filtroOrganismos == "") return articulos
    else return articulos.filter( a => a.organismos == filtroOrganismos );
  }


}
