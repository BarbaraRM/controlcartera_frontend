import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProdSuc'
})
export class FilterProdSucPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultProd = [];
    if (arg.toLowerCase() === 'todas') {
      return value;
    } else {
      try {
        for (const prod of value) {
          if (prod.ciudad_sucursal.toLowerCase().indexOf(arg.toLowerCase()) > -1 ) {
              resultProd.push(prod);
          };
        };
        return resultProd;
      } catch (error) {}
    };
  }

}
