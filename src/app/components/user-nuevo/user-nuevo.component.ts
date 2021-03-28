import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { UserInterface, Sucursales } from '../../models/user-interface';

@Component({
  selector: 'app-user-nuevo',
  templateUrl: './user-nuevo.component.html',
  styleUrls: ['./user-nuevo.component.css']
})
export class UserNuevoComponent implements OnInit {
  opcion = '';
  user: UserInterface = {
    id_usuario: '',
    nombres: '',
    apellidos: '',
    usuario: '',
    email: '',
    contrasenia: '',
    n_telefono: null,
    cargo: '',
    nombre_sucursal: '',
    id_sucursal: '',
    estado: 'ACTIVO',
  };
  
  dataSucursal: Sucursales;
  answer = {'tipo': '', 'mensaje': ''};
  hide = true;
  constructor(public dialogRef: MatDialogRef<UserNuevoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private authService: AuthService) {
      this.opcion = '';
     }

  ngOnInit(): any{
    this.getListSucursales();
    if (!this.data['add']) {
      this.user.id_usuario = this.data['infoU'].id_usuario;
      this.user.nombres = this.data['infoU'].nombres;
      this.user.apellidos = this.data['infoU'].apellidos;
      this.user.usuario = this.data['infoU'].usuario;
      this.user.email = this.data['infoU'].email;
      this.user.contrasenia = this.data['infoU'].contrasenia;
      this.user.n_telefono = this.data['infoU'].n_telefono;
      this.user.estado = this.data['infoU'].estado;
      this.user.cargo = this.data['infoU'].cargo;
      this.user.id_sucursal = this.data['infoU'].id_sucursal;
    }
    return this.answer;
  }

  onClickNO(): void {
    this.dialogRef.close();
  }

  onRegister(): any {
    if (this.validUser()) {
      this.authService.registerUser(
        this.user.id_usuario,
        this.user.nombres,
        this.user.apellidos,
        this.user.usuario,
        this.user.email,
        this.user.contrasenia,
        this.user.n_telefono,
        this.user.estado,
        this.user.cargo,
        this.user.id_sucursal,
        )
        .subscribe(user => {
          if (user['Tipo'] === 'success') {
            this.dialogRef.close(user);
          } else if (user['Tipo'] === 'errordb') {
            alert('El usuario ya existe');
          } else {
            this.dialogRef.close(user);
          }
        });
    } else {
      alert('Complete todos los campos para continuar.');
    }
  }

  onEdit() {
    console.log('Update');
    console.log(this.data['infoU']);
  }

  validUser(): any {
    if (this.user.id_usuario === '' || this.user.nombres.trim() === '' || this.user.apellidos.trim() === '' ||
        this.user.usuario.trim() === '' || this.user.email.trim() === '' || this.user.contrasenia.trim() === '') {
      return false;
    } else {
      return true;
    }
  }

  getListSucursales(): void {
    this.authService
      .getAllSucursales()
      .subscribe((sucursal: Sucursales) => (this.dataSucursal = sucursal));
      console.log(this.dataSucursal);
  }

  onlyNumberKey(event) {
    return (event.charCode === 8 || event.charCode === 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  }
}
