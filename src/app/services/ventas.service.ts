import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private htttp: HttpClient, private router: Router) {}

  // funcion para el select de productos
  getAllFacturas() {
    const url_api = 'http://192.168.10.110:4000/api/facturas';
    return this.htttp.get(url_api);
  }
  // funcion para el select de productos
  getCodigoFacturas() {
    const url_api = 'http://192.168.10.110:4000/api/facturas/codigo';
    return this.htttp.get(url_api);
  }
}
