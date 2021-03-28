import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { Ng2PagingTableModule } from 'ng2-paging-table';

const routes: Routes =[    
  {path: 'login', component: LoginComponent},   
  {path: '', redirectTo: 'login', pathMatch: 'full'}, 
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    Ng2PagingTableModule,
    RouterModule.forRoot(routes,{
       useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
