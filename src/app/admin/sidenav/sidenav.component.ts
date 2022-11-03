import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private router:Router) { 

  }

  ngOnInit(): void {
  }


//   goTobBooksPage(pageName){
//     if(pageName == 'books'){
//       this.router.navigateByUrl("/admin/books")
//     }


//   }
//   goToDashBoardPage(pageName){
//     if(pageName=='dashboard'){
//       this.router.navigateByUrl("/admin/dashboard")

//     }

//   }
//   goToCategoryPage(pageName){
// if(pageName=='category'){
//   this.router.navigateByUrl("/admin/category")

// }
//   }
//   goToReturnBooksPage(pageName){
//     if(pageName=='retunbooks'){
//       this.router.navigateByUrl("/admin/retunbooks")

//     }

//   }
//   goToIssueBooksPage(pageName){
//     if(pageName=='issuebooks')
//     this.router.navigateByUrl("/admin/issuebooks")

//   }

//   goToUserPage(pageName){
//     if(pageName=='user')
//     this.router.navigateByUrl('admin/user')

//   }
//   goTobBooksCopiesPage(pageName){
//       if(pageName=='bookcopies')
//       this.router.navigateByUrl('admin/bookcopies')
//   }
}
