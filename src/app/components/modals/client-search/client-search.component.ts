import { Component, OnInit } from '@angular/core';
import { ClientInterface } from '../../../models/client-interface';
import { ClientesService } from '../../../services/clientes.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.css']
})
export class ClientSearchComponent implements OnInit {

  dataSource: ClientInterface;
  pageActual: number = 1;
  public myCounter: number = 0;
  filterClient = '';

  constructor(public dialogRef: MatDialogRef<ClientSearchComponent>, private clientService: ClientesService) { }

  ngOnInit(): void {
    this.getListClientes();
  }

  onDblClickCell(item) {
    this.dialogRef.close(item);
  }

  // metodo para el api luego cambiar
  getListClientes(): void {
    this.clientService
      .getAllClientes()
      .subscribe((clientes: ClientInterface) => (this.dataSource = clientes));
  }

}
