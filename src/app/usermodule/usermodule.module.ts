import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsermoduleRoutingModule } from './usermodule-routing.module';
import { UserbooksComponent } from './userbooks/userbooks.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UsersidenaveComponent } from './usersidenave/usersidenave.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { TransectionsComponent } from './transections/transections.component';
import { FormsModule } from '@angular/forms';




@NgModule({

  declarations: [
    UserbooksComponent,
    UserdashboardComponent,
    UsersidenaveComponent,
    UserheaderComponent,
    TransectionsComponent
  ],
  imports: [
    CommonModule,
    UsermoduleRoutingModule,
    FormsModule,
  ],
})
export class UsermoduleModule { }
