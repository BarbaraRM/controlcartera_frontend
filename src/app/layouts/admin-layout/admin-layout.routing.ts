import { Routes } from '@angular/router';

import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';

import { HomeComponent } from '../../components/home/home';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { DssComponent } from '../../components/dss/dss.component';
import { EisComponent } from '../../components/eis/eis.component';
import { VentasComponent } from '../../components/ventas/ventas.component';
import { FacturarComponent } from '../../components/facturar/facturar.component';
import { TablaClientesComponent } from '../../components/tabla-clientes/tabla-clientes.component';
import { InventarioComponent } from '../../components/inventario/inventario.component';
import { EgresosComponent } from '../../components/egresos/egresos.component';
import { UsuariosComponent } from '../../components/users-list/usuarios.component';


export const AdminLayoutRoutes: Routes = [ 
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },

    { path: 'home',   component: HomeComponent },
    { path: 'user-profile',  component: UserProfileComponent },
    { path: 'dss-inventario',      component: DashboardComponent },
    { path: 'dss-ventas',  component: DssComponent },
    { path: 'toma-decisiones',  component: EisComponent },
    { path: 'ventas',  component: VentasComponent },
    { path: 'facturar',  component: FacturarComponent },
    { path: 'lista-clientes',  component: TablaClientesComponent },
    { path: 'inventario',  component: InventarioComponent },
    { path: 'nuevo-egreso',  component: EgresosComponent },
    { path: 'users',  component: UsuariosComponent },
];
