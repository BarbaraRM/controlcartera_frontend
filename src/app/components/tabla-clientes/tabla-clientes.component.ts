import { Component, OnInit } from '@angular/core';
import { ClientInterface } from '../../models/client-interface';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.css']
})
export class TablaClientesComponent implements OnInit {

  dataSource: ClientInterface;
  pageActual: number = 1;
  public myCounter: number = 0;
  filterClient = '';

  constructor(private clientService: ClientesService) { }

  ngOnInit(): void {
    this.getListClientes();
  }

  onRowClick(item) {
    console.log(item)
  }

  // metodo para el api luego cambiar
  getListClientes(): void {
    this.clientService
      .getAllClientes()
      .subscribe((clientes: ClientInterface) => (this.dataSource = clientes));
  }
}
