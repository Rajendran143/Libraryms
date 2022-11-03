import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomePageComponent } from './home-page/home-page.component';
 
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';


const routes: Routes = [

  {
    path: "",
    redirectTo: "loginform",
    pathMatch: 'full',
  },

  {
    path: "loginform",
    component: LoginFormComponent,
  },

  // {
  //   path: 'home',
  //   component: HomePageComponent,

  // },

  // {
  //   path: 'page1',
  //   component: Page1Component
  // },

  // {
  //   path: 'page2',
  //   component: Page2Component
  // },

  {
    path: "admin",
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),

  },

  {
    path: "usermodule",
    loadChildren: () => import('./usermodule/usermodule.module').then(m => m.UsermoduleModule),
  },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
