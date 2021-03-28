import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../../../models/product-interface';
import { AuthService } from '../../../services/auth.service';
import { ProductosService } from '../../../services/productos.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  dataSource: ProductInterface;
  pageActual: number = 1;
  public myCounter: number = 0;
  filterProd = '';
  filterProdSuc = '';
  constructor(public dialogRef: MatDialogRef<ProductSearchComponent>, 
              private authService: AuthService, private productService: ProductosService) { }

  ngOnInit(): void {
    this.getListProductos();
  }

  getListProductos(): void {
    const user = this.authService.getCurrentUser().id_usuario;
    this.productService
    .getAllProductosSuc(user)
    .subscribe((productos: ProductInterface) => (this.dataSource = productos));
  }

  onDblClickCell(item) {
    this.dialogRef.close(item);
  }

}
