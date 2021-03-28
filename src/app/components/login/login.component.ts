import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user-interface';
import { Router } from '@angular/router';
import { data } from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserInterface = {
    id_usuario: '',
    contrasenia: ''
  };
  userinto: UserInterface = {
    id_usuario: '',
    usuario: '',
    cargo: '',
    id_sucursal: '',
  };
  private u: UserInterface;
  message = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.getCurrentUser() != null) {
      this.router.navigate(['/home']);
    }
  }
  onLogin() {
    this.authService
        .loginuser(this.user.id_usuario , this.user.contrasenia)
        .subscribe(
        data => {
            this.userinto.id_usuario = data.id_usuario;
            this.userinto.usuario = data.usuario;
            this.userinto.cargo = data.cargo;
            this.userinto.id_sucursal = data.nombre_sucursal;
          if (this.userinto.usuario != undefined) {
            this.authService.setUser(this.userinto);
            const token = 'JKLOAS121DJUAL212';
            this.authService.setToken(token);
            this.message = '';
            this.router.navigate(['/home']);
          } else {
            this.message = 'Usuario o contraseña no válidos';
          }
        },
        error => this.message = 'Usuario o contraseña no válidos'
        );
  }
  onlyNumberKey(event) {
    return (event.charCode === 8 || event.charCode === 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  }
}
