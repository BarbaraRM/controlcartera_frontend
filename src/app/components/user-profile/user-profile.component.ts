import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user-interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  usuario: UserInterface = {
    id_usuario: '',
  nombres: '',
  apellidos: '',
  usuario: '',
  contrasenia: '',
  n_telefono: '',
  cargo: '',
  id_sucursal: '',
  nombre_sucursal: '',
  email: '',
  estado: '',
  };
  constructor(private authService: AuthService) {
   }

  ngOnInit() {
    this.getUser(this.authService.getCurrentUser().id_usuario);
  }

  getUser(id) {
    this.authService
        .getUSer(id)
        .subscribe(
        data => {
            this.usuario = data;
            console.log(data);
        },
        error => console.log('Error')
        );
  }

}
