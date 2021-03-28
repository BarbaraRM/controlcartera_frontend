import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

import { UserInterface } from '../models/user-interface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private htttp: HttpClient, private router: Router) {}

  // funciones para el crud del usuario
  registerUser(id_usuario: string, nombres: string, apellidos: string, usuario: string, email: string, contrasenia: string,
              n_telefono: string, estado: string, cargo: string, id_sucursal: string) {
    const url_api = 'http://192.168.10.110:4000/api/usuarios';
    return this.htttp
      .post<UserInterface>(
        url_api,
        {
          id_usuario, nombres, apellidos, usuario,
          contrasenia, n_telefono, cargo,
          id_sucursal, email, estado
        },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }

  editUser(id_usuario: string, nombres: string, apellidos: string, usuario: string, email: string, contrasenia: string,
    n_telefono: string, estado: string, cargo: string, id_sucursal: string) {
    const url_api = '/api/Users';
    return this.htttp
      .post<UserInterface>(
      url_api,
      {
        id_usuario, nombres, apellidos, usuario,
        contrasenia, n_telefono, cargo,
        id_sucursal, email, estado
      },
      { headers: this.headers }
      )
      .pipe(map(data => data));
  }

  deleteUser(id: string) {
    const url_api = `http://192.168.10.110:4000/api/usuarios/${id}`;
    return this.htttp
      .delete<UserInterface>(
      url_api,
      { headers: this.headers })
      .pipe(map(data => data));
  }

  loginuser(id_usuario: string, contrasenia: string): Observable<any> {
    const url_api = 'http://192.168.10.110:4000/api/usuarios/login';
    return this.htttp
      .post<UserInterface>(
        url_api,
        { id_usuario, contrasenia },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }

  // funcion para el select de sucursales
  getAllUsuarios() {
    const url_api = 'http://192.168.10.110:4000/api/usuarios';
    return this.htttp.get(url_api);
  }

  getUSer(id: string) {
    const url_api = `http://192.168.10.110:4000/api/usuarios/${id}`;
    return this.htttp
      .get<UserInterface>(
      url_api,
      { headers: this.headers })
      .pipe(map(data => data));
  }
 
  // funcion para el select de sucursales
  getAllSucursales() {
    const url_api = 'http://192.168.10.110:4000/api/sucursales';
    return this.htttp.get(url_api);
  }

  setUser(user: UserInterface): void {
    const user_string = JSON.stringify(user);
    localStorage.setItem('currentUser', user_string);
  }

  setToken(token): void {
    localStorage.setItem('accessToken', token);
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }

  getCurrentUser(): UserInterface {
    const user_string = localStorage.getItem('currentUser');
    if (!isNullOrUndefined(user_string)) {
      const user: UserInterface = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  logoutUser() {
    const accessToken = localStorage.getItem('accessToken');
    // const url_api = `http://localhost:3000/api/Users/logout?access_token=${accessToken}`;
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');
    this.router.navigate(['login'])
    // return this.htttp.post<UserInterface>(url_api, { headers: this.headers });
  }

}
