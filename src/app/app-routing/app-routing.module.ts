import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../PageNotFound/PageNotFound.component';
import { LoginComponent } from '../Login/Login.component';
import { SystemAdminModule } from '../SystemAdmin/SystemAdmin.module';
import { ClientAdminModule } from '../ClientAdmin/ClientAdmin.module';
import { UserModule } from '../User/User.module';



const AppRoutes:Routes=[
  
  { path: 'Login',component:LoginComponent},
  { path: 'sa', loadChildren: () => SystemAdminModule },// System Admin
  { path: 'ca', loadChildren: () => ClientAdminModule },// Client Admin
  { path: 'user', loadChildren: () => UserModule },// Simple User

  
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: '**', component:PageNotFoundComponent  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
