import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'facturas'
})
export class FacturasPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg.trim() === '') { return value; }
    const resultFact = [];
    for (const fact of value) {
      if (fact.nombres_cliente.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
         fact.id_factura.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
          resultFact.push(fact);
      };
    };
    return resultFact;
  }

}
