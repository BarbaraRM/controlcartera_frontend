import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../../models/product-interface';
import { Sucursales } from '../../models/user-interface';
import { AuthService } from '../../services/auth.service';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  // cambiar este en el html en vez de Sucursales poner sucursal
  dataSucursal: Sucursales;
  dataSource: ProductInterface;
  pageActual: number = 1;
  public myCounter: number = 0;
  filterProd = '';
  filterProdSuc = '';

  constructor(private authService: AuthService, private productService: ProductosService) {}

  ngOnInit(): void {
    this.getListProductos();
    this.getListSucursales();
  }

  getListSucursales(): void {
    this.authService
      .getAllSucursales()
      .subscribe((sucursal: Sucursales) => (this.dataSucursal = sucursal));
  }

  getListProductos(): void {
    this.productService
    .getAllProductos()
    .subscribe((productos: ProductInterface) => (this.dataSource = productos));
    console.log(this.dataSource);
  }
}
