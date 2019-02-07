import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,  Routes} from '@angular/router';
import { SystemAdminMasterComponent } from './SystemAdminMaster/SystemAdminMaster.component';
import { SystemAdmintestComponent } from './SystemAdmintest/SystemAdmintest.component';
import { SystemAdminPageNotFoundComponent } from './SystemAdminPageNotFound/SystemAdminPageNotFound.component';
import { SystemAdminGuard } from './system-admin.guard';



const SystemAdminRoutes:Routes=[
  {
    path:'',
    component:SystemAdminMasterComponent,
    children:
    [
      {path:'dashboard',component:SystemAdmintestComponent,canActivate:[SystemAdminGuard]},
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', component:SystemAdminPageNotFoundComponent  }
    ]
  
  }
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(SystemAdminRoutes)
  ],
  declarations: [
    SystemAdminMasterComponent,
    SystemAdmintestComponent,
    SystemAdminPageNotFoundComponent
  ]
})
export class SystemAdminModule { }
