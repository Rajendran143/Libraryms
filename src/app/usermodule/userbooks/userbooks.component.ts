
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiserviceService } from 'src/app/services/apiservices/apiservice.service';

@Component({
  selector: 'app-userbooks',
  templateUrl: './userbooks.component.html',
  styleUrls: ['./userbooks.component.scss']
})
export class UserbooksComponent implements OnInit {

  list: any;
  readUserBooks: any = {};
  userid: any = localStorage.getItem('userid');
  readCategory: any = {};
  readbookcategory: any = {};
  filter: any;

  constructor(private apiservice: ApiserviceService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.readCatogery();
    this.readBooks();
    // this.readBookByCategery();

  }
  //geeting book id and passing
  bookspopup(Page: any) {
    this.list = Page
    // console.log(this.list)
  }

  readBooks() {
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + token };
    this.apiservice.get(`http://192.168.1.123/boilerplate/api/web/v1/libmag/seebook?username=${username}`, { headers, responseType: 'json' })
      .subscribe((res: any) => {
        this.readUserBooks = res
        // console.log(this.readUserBooks)
      })
  }

  makeTransections(book_id: any) {
    let payload: any = {
      "user_id": this.userid,
      "book_id": book_id
    }
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + token };
    this.apiservice.Post(`http://192.168.1.123/boilerplate/api/web/v1/libmag/maketransaction?username=${username}`, payload, { headers, responseType: 'json' })
      .subscribe((res => {
        // console.log(res)
      }))
  }

  readCatogery() {
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + token };
    this.apiservice.get(`http://192.168.1.123/boilerplate/api/web/v1/libmag/readcatagory?username=${username}`, { headers, responseType: 'json' })
      .subscribe((res => {
        this.readCategory = res
        console.log(this.readCategory)

      }))
  }



  readBookByCategery(filter: any) {
    let filterdata: any = filter.target.value
    // console.log(filterdata)
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + token };
    this.apiservice.get(`http://192.168.1.123/boilerplate/api/web/v1/libmag/readbookbycatagory?username=${username}&catagory=${filterdata}`, { headers, responseType: 'json' })
      .subscribe((res => {
        this.readbookcategory = res
        console.log(this.readbookcategory)

      }))

  }
}
