import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProd'
})
export class FilterProdPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg.trim() == '') return value;
    const resultProd = [];
    for(const prod of value){
      if(prod.id_producto.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
         prod.nombre_producto.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
          resultProd.push(prod);
      };
    };
    return resultProd;
  }

}
