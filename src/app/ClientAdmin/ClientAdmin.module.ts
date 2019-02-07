import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,  Routes} from '@angular/router';
import { ClientAdminMasterComponent } from './ClientAdminMaster/ClientAdminMaster.component';
import { ClientAdminTestComponent } from './ClientAdminTest/ClientAdminTest.component';
import { ClientAdminPageNotFoundComponent } from './ClientAdminPageNotFound/ClientAdminPageNotFound.component';
import { ClientAdminGuard } from './client-admin.guard';




const ClientAdminRoutes:Routes=[
  {
    path:'',
    component:ClientAdminMasterComponent,
    children:
    [
      {path:'dashboard',component:ClientAdminTestComponent,canActivate:[ClientAdminGuard]},
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', component:ClientAdminPageNotFoundComponent  }
    ]
  
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(ClientAdminRoutes)
  ],
  declarations: [
    ClientAdminMasterComponent,
    ClientAdminTestComponent,
    ClientAdminPageNotFoundComponent

  ]
})
export class ClientAdminModule { }
