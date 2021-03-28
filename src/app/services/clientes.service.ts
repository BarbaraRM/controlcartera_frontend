import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ClientInterface } from '../models/client-interface';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private htttp: HttpClient, private router: Router) {}

  // funcion para el select de clientes
  getAllClientes() {
    const url_api = 'http://192.168.10.110:4000/api/clientes';
    return this.htttp.get(url_api);
  }

  // funcion para el un cliente
  getCliente(id: string) {
    const url_api = `http://192.168.10.110:4000/api/clientes/${id}`;
    return this.htttp
      .get<ClientInterface>(
      url_api,
      { headers: this.headers })
      .pipe(map(data => data));
  }
}
