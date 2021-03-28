import { Component, OnInit } from '@angular/core';
import { VentasInterface } from '../../models/ventas-interface';
import { ClientInterface } from '../../models/client-interface';
import { ProductInterface } from '../../models/product-interface';
import { ClientesService } from '../../services/clientes.service';
import { ProductosService } from '../../services/productos.service';
import { VentasService } from '../../services/ventas.service';
import { AuthService } from '../../services/auth.service';

import {MatDialog} from '@angular/material/dialog';
import {ClientSearchComponent} from '../modals/client-search/client-search.component';
import {ProductSearchComponent} from '../modals/product-search/product-search.component';

@Component({
  selector: 'app-facturar',
  templateUrl: './facturar.component.html',
  styleUrls: ['./facturar.component.css']
})
export class FacturarComponent implements OnInit {

  factura: VentasInterface = {
    id_factura: '',
    fact_fecha: '',
    subtotal: 0,
    descuento: 0,
    iva: 0,
    total: 0,
    id_cliente: '',
    id_usuario: '',
    usuario: '',
  }

  producto: ProductInterface = {
    id_producto: '',
    nombre_producto: ' ',
    id_sucursal: '',
    cantidad: 0,
  }

  cliente: ClientInterface = {
    id_cliente: '',
    nombre_cliente: '',
    apellido_cliente: '',
    direccion: ' ',
  }

  listaProd: any [] = [
    {id_producto: '', nombre_producto: '', cantidad: 0, precio_vp: 0, total: 0}
  ];
  pageActual = 1;
  public myCounter = 0;
  cantidad = 1;
  nombreCompleto = this.cliente.apellido_cliente + ' ' + this.cliente.nombre_cliente;
  fecha;

  constructor(public dialog: MatDialog, private clientService: ClientesService, 
              private productService: ProductosService, private ventasService: VentasService, private authService: AuthService) { }

  ngOnInit(): void {
    this.date();
    this.codigoFactura();
  }

  // funciones adicionales
  date() {
    const fecha = new Date(),
    dia = fecha.getDate(),
    mes = fecha.getMonth(),
    year = fecha.getFullYear();
    this.fecha = dia + '/' + mes + '/' + year;
  }
  // busqueda con base de datos
  codigoFactura(): void {
    this.ventasService
    .getCodigoFacturas()
    .subscribe((ventas: string) => (this.factura.id_factura = ventas));
  }

  searchClient(): void {
    if (this.cliente.id_cliente === '') {
      const dialogRef = this.dialog.open(ClientSearchComponent, {
        width: '70%'});
      dialogRef.afterClosed().subscribe(res => {
        if (res != true && res != undefined) {
          this.cliente = res;
          if (this.cliente.id_cliente != undefined){
            this.nombreCompleto = this.cliente.apellido_cliente + ' ' + this.cliente.nombre_cliente;
          }
        }
      });
    } else {
      this.clientService
        .getCliente(this.cliente.id_cliente)
        .subscribe(
        data => {
            this.cliente = data;
            if (this.cliente.id_cliente != undefined){
              this.nombreCompleto = this.cliente.apellido_cliente + ' ' + this.cliente.nombre_cliente;
            } else {
              this.cliente.id_cliente = '';
              this.nombreCompleto = '';
            }
        },
        error => console.log('Error')
        );
    }
  }

  searchProduct(): void {
    console.log('1', this.producto.id_producto)
    if (this.producto.id_producto === '') {
      const dialogRef = this.dialog.open(ProductSearchComponent, {
        width: '70%'});
      dialogRef.afterClosed().subscribe(res => {
        if (res != true && res != undefined) {
          this.producto = res;
        }
      });
    } else {
      console.log('2', this.producto.id_producto)
      const user = this.authService.getCurrentUser().id_usuario;
      console.log('3', user)
      this.productService
        .getProductosSuc(user, this.producto.id_producto)
        .subscribe(
        data => {
          console.log('4', data)
            this.producto = data;
            if (this.cliente.id_cliente === undefined){
              this.producto.descripcion = '';
              this.producto.cantidad = 0;
            }
        },
        error => console.log('Error')
        );
    }
  }

  addProduct(): void {

  }

  onSave() {

  }

  onDelete(id_producto) {

  }

  onClickNO(): void {

  }
  // validaciones de campos
  validateNumber(evt): void {
    let e = evt || window.event;
    let key = e.keyCode || e.which;
    if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
    // numbers 
    key >= 48 && key <= 57 ||
    // Numeric keypad
    key >= 96 && key <= 105 ||
    // Backspace and Tab and Enter
    key === 8 || key === 9 || key === 13 ||
    // Home and End
    key === 35 || key === 36 ||
    // left and right arrows
    key === 37 || key === 39 ||
    // Del and Ins
    key === 46 || key === 45) {
        // input is VALID
    } else {
        // input is INVALID
        e.returnValue = false;
        if (e.preventDefault) { e.preventDefault(); }
    }
  }
  onlyNumberKey(event) {
    return (event.charCode === 8 || event.charCode === 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  }
}
