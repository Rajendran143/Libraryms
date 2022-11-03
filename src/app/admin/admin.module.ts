import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooksComponent } from './books/books.component';
import { CategoryComponent } from './category/category.component';
import { ReturnbookComponent } from './returnbook/returnbook.component';
import { IssuebookComponent } from './issuebook/issuebook.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookCopiesComponent } from './book-copies/book-copies.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({

  declarations: [
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    BooksComponent,
    CategoryComponent,
    ReturnbookComponent,
    IssuebookComponent,
    UserComponent,
    BookCopiesComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AdminRoutingModule,
    ReactiveFormsModule,

  ]
})
export class AdminModule { }
