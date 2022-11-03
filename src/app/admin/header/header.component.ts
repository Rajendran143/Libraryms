import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/services/apiservices/apiservice.service';
import { AuthserviceService } from 'src/app/shared/authservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  Name = '';
  username: any;
  token: any;
  logOut: any = {};
  constructor(
    private router: Router,
    private auth: AuthserviceService,
    private apiservice: ApiserviceService,

  ) { }

  ngOnInit(): void {
    this.Name = localStorage.getItem('name')
    console.log(this.Name)
    this.username = localStorage.getItem('username')
    this.token = localStorage.getItem('token')
  }

  goLoginPagePage() {
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.token };
    this.apiservice.get(`http://192.168.1.123/boilerplate/api/web/v1/libmag/signout?username=${this.username}`, { headers, responseType: 'json' })
      .subscribe((res => {
        this.logOut = res
      }))
    if (this.logOut) {
      this.auth.isloggedOut();
      this.router.navigateByUrl('/loginform')
      return true
    } else {
      this.router.navigateByUrl('/admin/dashboard')
      false
    }
  }
}

