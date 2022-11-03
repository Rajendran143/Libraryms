import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/services/apiservices/apiservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private Apiservice: ApiserviceService,
    private fb: FormBuilder,
  ) { }

  addUserReactiveform: any = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('^[ A-Za-z0-9_@./#&+-]*$')]],
    username: ['', [Validators.required, Validators.pattern('^[ A-Za-z0-9_@./#&+-]*$')]],
    phonenumber: ['', [Validators.required, Validators.pattern("[0-9 ]{10}")]],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    dob: ['', [Validators.required, Validators.pattern('')]],
    password: ['', [Validators.required, Validators.pattern('')]],
  })

  ngOnInit(): void {
    this.ReadUsers()
  }




  usersList: any;
  ReadUsers() {
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + token };
    this.Apiservice.get(`http://192.168.1.123/boilerplate/api/web/v1/libmag/seealluser?username=${username}`, { headers, responseType: 'json' })
      .subscribe((res => {
        this.usersList = res
        console.log(this.usersList)
      }))

  }
  createUser: any = {};
  AddUser(payload: any) {
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + token };
    this.Apiservice.Post(`http://192.168.1.123/boilerplate/api/web/v1/libmag/enteruser?username=${username}`, payload, { headers, responseType: 'jsos' })
      .subscribe((res => {
        this.createUser = res
        console.log(this.createUser)
      }))
  }

  userid: any
  ActionDeleteUser(id: any) {
    this.userid = id
  }

  deleteUser() {
    let body: any = {
      "user_id": this.userid
    }
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + token };
    this.Apiservice.Post(`http://192.168.1.123/boilerplate/api/web/v1/libmag/deleteuser?username=${username}`, body, { headers, responseType: 'json' })
      .subscribe((res => {
        console.log(res)

      }))

  }
}

