import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductInterface } from '../models/product-interface';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private htttp: HttpClient, private router: Router) {}

  // funcion para el select de productos
  getAllProductos() {
    const url_api = 'http://192.168.10.110:4000/api/productos';
    return this.htttp.get(url_api);
  }
  // funcion para el select de productos por sucursal
  getAllProductosSuc(id: string): Observable<any> {
    const url_api = `http://192.168.10.110:4000/api/productos/sucursal/${id}`;
    return this.htttp
      .get<ProductInterface>(
      url_api,
      { headers: this.headers })
      .pipe(map(data => data));
  }

  getProductosSuc(id: string, prod: string): Observable<any> {
    const url_api = `http://192.168.10.110:4000/api/productos/search/${id}/${prod}`;
    return this.htttp
      .get<ProductInterface>(
      url_api,
      { headers: this.headers })
      .pipe(map(data => data));
  }
}
