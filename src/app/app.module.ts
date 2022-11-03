import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminModule } from './admin/admin.module';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UsermoduleModule } from './usermodule/usermodule.module';
import { FormsModule } from '@angular/forms';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthserviceService } from './shared/authservice.service';
import { AuthguaredGuard } from './shared/authservice/authguared.guard';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginFormComponent,
    Page1Component,
    Page2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AdminModule,
    FormsModule,
    UsermoduleModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthserviceService, AuthguaredGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
