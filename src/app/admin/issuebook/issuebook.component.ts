import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservices/apiservice.service';

@Component({
  selector: 'app-issuebook',
  templateUrl: './issuebook.component.html',
  styleUrls: ['./issuebook.component.scss']
})
export class IssuebookComponent implements OnInit {
  readTransections: any = {}
  readusernames: any
  filter: any = {};
  readSearchTransection:any = {}


  constructor(private apiservice: ApiserviceService) { }

  ngOnInit(): void {
    this.readTransection();
    this.readusers()
     
  }


  readTransection() {
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + token };
    this.apiservice.get(`http://192.168.1.123/boilerplate/api/web/v1/libmag/readtransaction?username=${username}`, { headers, responseType: 'json' })
      .subscribe((res => {
        this.readTransections = res
        console.log(this.readTransections)
      }))
  }


  readusers() {
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + token };
    this.apiservice.get(`http://192.168.1.123/boilerplate/api/web/v1/libmag/seealluser?username=${username}`, { headers, responseType: 'json' })
      .subscribe((res => {
        this.readusernames = res
        console.log(this.readusernames)
      }))
  }

  searchByUsername(filter: any) {
    let nameofusers: any = filter.target.value;
    console.log(nameofusers)
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + token };
    this.apiservice.get(`http://192.168.1.123/boilerplate/api/web/v1/libmag/readtransactionbyusername?username=${username}&search_name=${nameofusers}`, { headers, responseType: 'json' })
      .subscribe((res => {
      this.readSearchTransection = res
      console.log(this.readSearchTransection)
      }))
  }
}


