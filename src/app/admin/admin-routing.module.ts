import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguaredGuard } from '../shared/authservice/authguared.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooksComponent } from './books/books.component';
import { CategoryComponent } from './category/category.component';
import { ReturnbookComponent } from './returnbook/returnbook.component';
import { IssuebookComponent } from './issuebook/issuebook.component';
import { UserComponent } from './user/user.component';
import { BookCopiesComponent } from './book-copies/book-copies.component';

const routes: Routes = [

  {
   path:'',
   redirectTo:'dashboard',
   pathMatch:'full',
  },

  {
    path: 'admin', children: [

      {
        path: 'books',
        component: BooksComponent,
      },

      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthguaredGuard]
      },
      {
        path: 'category',
        component: CategoryComponent,
      },

      {
        path: 'retunbooks',
        component: ReturnbookComponent
      },

      {
        path: 'issuebooks',
        component: IssuebookComponent
      },
      {
        path: 'user',
        component: UserComponent
      },

      {
        path: 'bookcopies',
        component: BookCopiesComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
