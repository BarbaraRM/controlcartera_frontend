import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';
// luego borrar
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';

// componentes principaes
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
import { UserNuevoComponent } from '../../components/user-nuevo/user-nuevo.component';
// Externals
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from '../../components/pipes/filter.pipe';
import { FilterProdPipe } from '../../components/pipes/filter-prod.pipe';
import {FilterProdSucPipe} from '../../components/pipes/filter-prod-suc.pipe'
import { FacturasPipe } from '../../components/pipes/facturas.pipe';
// material para formulario
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
// modales
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { ClientSearchComponent } from '../../components/modals/client-search/client-search.component';
import { ProductSearchComponent } from '../../components/modals/product-search/product-search.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    NgxPaginationModule,
  ],
  declarations: [
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,

    HomeComponent,
    UserProfileComponent,
    DashboardComponent,
    DssComponent,
    EisComponent,
    VentasComponent,
    FacturarComponent,
    TablaClientesComponent,
    InventarioComponent,
    EgresosComponent,
    UsuariosComponent,

    FilterPipe,
    FilterProdPipe,
    FilterProdSucPipe,
    FacturasPipe,
    ConfirmDialogComponent,
    UserNuevoComponent,
    ClientSearchComponent,
    ProductSearchComponent,
  ],
  entryComponents: [ConfirmDialogComponent]
})

export class AdminLayoutModule {}
