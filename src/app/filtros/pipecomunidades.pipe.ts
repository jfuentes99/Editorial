import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipecomunidades'
})
export class PipecomunidadesPipe implements PipeTransform {

  transform(articulos: Array<any>, filtroComunidades:string):Array<any> {
    if (filtroComunidades == "") return articulos
    else return articulos.filter( a => a.comunidades == filtroComunidades );
  }

}
