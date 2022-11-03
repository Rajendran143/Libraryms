import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservices/apiservice.service';

@Component({
  selector: 'app-transections',
  templateUrl: './transections.component.html',
  styleUrls: ['./transections.component.scss']
})
export class TransectionsComponent implements OnInit {

  readtransection: any = {};
  readData: any;
  
  
  constructor(private apiservice: ApiserviceService) { }

  ngOnInit(): void {
    this.readTransectionbyId();
  }


  readTransectionbyId() {
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let userId = localStorage.getItem('userid')
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + token };

    this.apiservice.get(`http://192.168.1.123/boilerplate/api/web/v1/libmag/readtransactionbyid?username=${username}&user_id=${userId}`, { headers, responseType: 'json' })
      .subscribe((res => {
        this.readtransection = res;
        console.log(this.readtransection)
      }))
  }



  returnbook(readata: any) {
    this.readData = readata
  }
  returnRequest() {
    let payload = {
      "user_id": this.readData?.user_id,
      "book_id": this.readData?.book_id,
      "act_returneddate": this.readData?.act_returneddateData,
    }
    console.log(payload)
    let username = localStorage.getItem('username');
    let token = localStorage.getItem('token');
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + token };
    this.apiservice.Post(`http://192.168.1.123/boilerplate/api/web/v1/libmag/returnbook?username=${username}`, payload, { headers, responseType: 'json' })
      .subscribe((res => {
        // console.log(res)
      }))
  }
}
