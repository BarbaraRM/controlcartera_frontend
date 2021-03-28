import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';
import {UserNuevoComponent} from '../user-nuevo/user-nuevo.component';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user-interface';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: UserInterface;
  respuesta: any;

  pageActual: number = 1;
  public myCounter: number = 0;
  filterClient = '';

  constructor(public dialog: MatDialog, private authService: AuthService) { }

  ngOnInit(): void {
    this.getListUsuarios();
  }

  onCreate(): void {
    const dialogRef = this.dialog.open(UserNuevoComponent, {
      width: '50%',  data: {titulo: 'Agregar un nuevo Usuario', accion: 'Agregar', add: true}
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        if (res.tipo === 'success') {
          alert('Notificacion - insertado con exito');
          this.getListUsuarios();
        } else if (res.tipo === 'errordb') {
          alert('El usuario ya existe');
        } else {
          alert('No se pudo registrar el nuevo usuario');
        }
      }
    });
  }

  onDelete(id): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px', data: '¿Seguro desea eliminar este usuario?'
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res){
        this.authService
        .deleteUser(id)
        .subscribe(data => {
          console.log(data);
          if (data['tipo'] === 'success') {
            console.log('Eliminado con exito');
            this.getListUsuarios();
          } else {
            if (data['mensaje'].includes('child record found')) {
              console.log('El usuario tiene facturas registradas, solo sera inhabilitado');
            } else{
              console.log('Error al eliminar');
            }
          }
          console.log(data['tipo']);
        });
      }
    });
  }
  onEdit (usuario) {
    console.log(usuario);
    const dialogRef = this.dialog.open(UserNuevoComponent, {
      width: '50%',  data: {titulo: 'Editar Usuario', accion: 'Editar', add: false, infoU: usuario}
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res){
        console.log('Agregado');
      }
    });
  }

  // metodo para el api luego cambiar
  getListUsuarios(): void {
    this.authService
      .getAllUsuarios()
      .subscribe((usuarios: UserInterface) => (this.usuarios = usuarios));
  }

}
