import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/services/apiservices/apiservice.service';
import { AuthserviceService } from 'src/app/shared/authservice.service';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.scss']
})
export class UserheaderComponent implements OnInit {
  Name: any;
  logOut:any={};
  username: any;
  token: any;

  constructor(
    private auth: AuthserviceService,
    private apiservice: ApiserviceService,
    private router: Router) { }

  ngOnInit(): void {
    this.Name = localStorage.getItem('name')
    this.username = localStorage.getItem('username')
    this.token = localStorage.getItem('token')
  }

  signOut() {
    this.auth.isloggedOut();
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.token };
    this.apiservice.get(`http://192.168.1.123/boilerplate/api/web/v1/libmag/signout?username=${this.username}`, { headers, responseType: 'json' })
      .subscribe((res => {
        this.logOut = res
        console.log(this.logOut)

      }))
    if (this.logOut) {
      this.auth.isloggedOut()
      this.router.navigateByUrl('/loginform')
      return true
    } else {
      this.router.navigateByUrl('/userdashboard')
      return false
    }
  }

}

