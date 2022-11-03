import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservices/apiservice.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(private http: HttpClient, private aspiservice: ApiserviceService) { }
  token: any;
  username: any;
  ngOnInit(): void {
    this.GetReadBooks()

  }

  readBooks: any;
  GetReadBooks() {
    this.username = localStorage.getItem('username')
    this.token = localStorage.getItem('token')
    console.log(this.username)
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.token };
    this.aspiservice.get(`http://192.168.1.123/boilerplate/api/web/v1/libmag/seebook?username=${this.username}`, { headers, responseType: 'json' }).subscribe((res => {
      this.readBooks = res;
      // console.log(this.readBooks)
    }))
  }

  addBooksData: any = {};
  addBooks(sendBookData: any) {

    this.username = localStorage.getItem('username')
    this.token = localStorage.getItem('token')
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.token };
    this.aspiservice.Post(`http://192.168.1.123/boilerplate/api/web/v1/libmag/enternewbook?username=${this.username}`, sendBookData, { headers, responseType: 'json' })
    .subscribe((res: any) => {
    this.addBooksData = res
    console.log(this.addBooksData)
      })
  }



  deleteBooks(bookId: any) {
    this.username = localStorage.getItem('username')
    this.token = localStorage.getItem('token')
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.token };
    this.aspiservice.get(`http://192.168.1.123/boilerplate/api/web/v1/libmag/deletebook?username=${this.username}&book_id=${bookId}`, { headers, responseType: 'json' })
      .subscribe((res: any) => {


      })
  }

}
