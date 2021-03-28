import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg.trim() === '' || arg.length < 2) { return value; }
    const resultCli = [];
    for (const cli of value) {
      if (cli.nombres.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
         cli.apellidos.toLowerCase().indexOf(arg.toLowerCase()) > -1 ) {
        resultCli.push(cli);
      };
    };
    return resultCli;
  }

}
