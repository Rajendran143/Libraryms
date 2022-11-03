import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservices/apiservice.service';

@Component({
  selector: 'app-book-copies',
  templateUrl: './book-copies.component.html',
  styleUrls: ['./book-copies.component.scss']
})
export class BookCopiesComponent implements OnInit {
  booklists: any;
  readcopy: any = {}

  constructor(private apiservice: ApiserviceService) { }

  ngOnInit(): void {
    this.readBooks();
  }

  readBooks() {
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + token };
    this.apiservice.get(`http://192.168.1.123/boilerplate/api/web/v1/libmag/seebook?username=${username}`, { headers, responseType: 'json' }).subscribe((res => {
      this.booklists = res;
      console.log(this.booklists)
    }))
  }
 
  bookid:any;
  PassBookId(id:any){
  this.bookid=id;
  console.log(this.bookid)
  }

  ReadCopies() {
    console.log(this.bookid)
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + token };
    this.apiservice.get(`http://192.168.1.123/boilerplate/api/web/v1/libmag/getcopy?username=${username}&book_id=${this.bookid}`, { headers, responseType: 'json' })
      .subscribe((res => {
        this.readcopy = res;
        console.log(res)
      
      }))

  }

}
