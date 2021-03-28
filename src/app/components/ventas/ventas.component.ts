import { Component, OnInit } from '@angular/core';
import { VentasInterface } from '../../models/ventas-interface';
import { VentasService } from '../../services/ventas.service';

// falta importa el service

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  // dataVentas: VentasInterface;
  dataVentas: VentasInterface;
  pageActual: number = 1;
  public myCounter: number = 0;
  filterFacturas = '';

  constructor(private ventasService: VentasService) { }

  ngOnInit(): void {
    this.getListVentas();
  }

  // metodo para el api luego cambiar
  getListVentas(): void {
    this.ventasService
    .getAllFacturas()
    .subscribe((ventas: VentasInterface) => (this.dataVentas = ventas));
  }

}
