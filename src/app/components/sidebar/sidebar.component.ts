import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user-interface';
import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dss-inventario', title: 'DSS Inventario',  icon: 'analytics', class: 'Dashboard'},
    { path: '/dss-ventas', title: 'DSS Ventas',  icon: 'bar_chart', class: 'Dashboard'},
    { path: '/toma-decisiones', title: 'Toma de decisiones',  icon: 'pie_chart', class: 'Dashboard' },
    { path: '/ventas', title: 'Ventas',  icon: 'trending_up', class: 'Ventas' },
    { path: '/facturar', title: 'Facturar',  icon: 'shopping_cart', class: 'Ventas' },
    { path: '/lista-clientes', title: 'Visualizar Clientes',  icon: 'supervisor_account', class: 'Clientes' },
    { path: '/inventario', title: 'Inventario',  icon: 'shopping_bag', class: 'Productos' },
    { path: '/users', title: 'Usuarios',  icon:'supervisor_account', class: 'Usuarios' },
];

export const PERM_VENDEDOR: String[] = ['/home, /facturar', '/lista-clientes', '/inventario'];
export const PERM_SECRETARIA: String[] = ['/ventas', '/lista-clientes', '/inventario'];
export const PERM_GERENTE: String[] = ['/dss-inventario', '/dss-ventas', '/toma-decisiones', '/ventas', '/facturar', '/lista-clientes', '/inventario', '/users', '/register'];

let texto_padre = '';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  user: UserInterface;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.getCurrentUser() != null ) {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
      this.user = this.authService.getCurrentUser();
    } else {
      this.user = {'usuario': '', 'cargo': '', 'id_sucursal': ''}
      this.router.navigate(['/login']);
    };
  }
  onLogout(): void {
    this.authService.logoutUser();
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  isFather(padre) {
    if (padre =! '') {
        return true;
    }
    return false;
  };
  isAllow(ruta, cargo) {
    if (cargo === 'VENDEDOR') {
      if (PERM_VENDEDOR.includes(ruta)) {
        return true;
      } else {
        return false;
      }
    };
    if (cargo === 'SECRETARIA') {
      if (PERM_SECRETARIA.includes(ruta)) {
        return true;
      } else {
        return false;
      }
    };
    if (cargo === 'GERENTE') {
      if (PERM_GERENTE.includes(ruta)) {
        return true;
      } else {
        return false;
      }
    };
    if (cargo === 'ADMINISTRADOR') {
      return true;
    };
  };
  setText(padre) {
    texto_padre = padre;
  }
  containFather(father) {
    if (father === texto_padre) {
      return false;
    } else {
      return true;
    }
  }
  getCargo() {
    // aqui ver como hacer para leer datos
    return this.user.cargo;
  };
  getImage() {
    if (this.getCargo() === 'VENDEDOR') {
      return '/assets/img/icon_user.png';
    }
    if (this.getCargo() === 'SECRETARIA') {
      return '/assets/img/icon_user.png';
    }
    if (this.getCargo() === 'GERENTE') {
      return '/assets/img/icon_admin.png';
    }
    if (this.getCargo() === 'ADMINISTRADOR') {
      return '/assets/img/icon_superuser.png';
    }
  }
}
