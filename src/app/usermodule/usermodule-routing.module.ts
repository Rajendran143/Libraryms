import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguaredGuard } from '../shared/authservice/authguared.guard';
import { TransectionsComponent } from './transections/transections.component';
import { UserbooksComponent } from './userbooks/userbooks.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'userdashboard',
    pathMatch: 'full',
  },

  {
    path: 'usermodule', children: [

      {
        path: 'userdashboard',
        component: UserdashboardComponent,
        canActivate: [AuthguaredGuard]

      },

      {
        path: 'userbooks',
        component: UserbooksComponent,
      },
      {
        path: 'transections',
        component: TransectionsComponent,

      }
    ],
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermoduleRoutingModule { }

