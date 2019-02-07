import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsertestComponent } from './usertest/usertest.component';
import { MasterComponent } from './Master/Master.component';
import { UserpagenotfoundComponent } from './Userpagenotfound/Userpagenotfound.component';
import { UserGuard } from './user.guard';
import { UserDashboardComponent } from './UserDashboard/UserDashboard.component';
import { ProcessInfoComponent } from './ProcessInfo/ProcessInfo.component';
import { WizardNavComponent } from './WizardNav/WizardNav.component';
import { ProcessQualificationComponent } from './ProcessQualification/ProcessQualification.component';
import { ProcessFeasibilityComponent } from './ProcessFeasibility/ProcessFeasibility.component';
import { UserNavBarComponent } from './UserNavBar/UserNavBar.component';


const userRoutes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children:
      [
        { path: 'dashboard', component: UserDashboardComponent, canActivate: [UserGuard] },
        {
          path: 'wizard',
          component: WizardNavComponent, canActivate: [UserGuard],
          children: [
            { path: 'processInfo', component: ProcessInfoComponent, canActivate: [UserGuard] },
            { path: 'processQualification', component: ProcessQualificationComponent, canActivate: [UserGuard] },
            { path: 'processFeasibility', component: ProcessQualificationComponent, canActivate: [UserGuard] },
            { path: '', redirectTo: 'processInfo', pathMatch: 'full' },
            { path: '**', component: UserpagenotfoundComponent }
          ]
        },
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: '**', component: UserpagenotfoundComponent }
      ]

  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    ProcessInfoComponent,
    ProcessQualificationComponent,
    UserDashboardComponent,
    UsertestComponent,
    WizardNavComponent,
    MasterComponent,
    UserpagenotfoundComponent,
    UserNavBarComponent
  ]
})
export class UserModule { }
