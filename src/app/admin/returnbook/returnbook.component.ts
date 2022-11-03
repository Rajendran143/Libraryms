import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservices/apiservice.service';

@Component({
  selector: 'app-returnbook',
  templateUrl: './returnbook.component.html',
  styleUrls: ['./returnbook.component.scss']
})
export class ReturnbookComponent implements OnInit {
  readTransections: any = {}
  getTransectionData: any;

  constructor(private Apiservices: ApiserviceService) { }

  ngOnInit(): void {
    this.readTransection();
  }

  readTransection() {
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + token };
    this.Apiservices.get(`http://192.168.1.123/boilerplate/api/web/v1/libmag/readtransaction?username=${username}`, { headers, responseType: 'json' })
      .subscribe((res => {
        this.readTransections = res
        console.log(this.readTransections)
      }))
  }

  readReturnBooks(transectionData: any) {
    this.getTransectionData = transectionData
  }

  returnBooks() {
    let body: any = {
      "user_id": this.getTransectionData?.user_id,
      "book_id": this.getTransectionData?.book_id,
      "act_returneddate": this.getTransectionData?.act_returneddate,
      "approval_status": this.getTransectionData?.t_status,
      "rejected_remark": this.getTransectionData?.null,
      "rejected_fine": this.getTransectionData?.t_fine,
    }
    let username = localStorage.getItem('username');
    let token = localStorage.getItem('token');
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + token };
    this.Apiservices.Post(`http://192.168.1.123/boilerplate/api/web/v1/libmag/returnbook?username=${username}`, body, { headers, responseType: 'json' })
      .subscribe((res => {
        console.log(res)
      }))
  }
}
