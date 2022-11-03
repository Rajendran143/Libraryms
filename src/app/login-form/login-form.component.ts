import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../services/apiservices/apiservice.service';
import { AuthserviceService } from '../shared/authservice.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  postData: any = {};
  constructor(
    private apiService: ApiserviceService,
    private router: Router,
    private auth: AuthserviceService,
    private fb: FormBuilder,

  ) { }
  roleId: any;
  user: any;

  ngOnInit(): void {
  }

  loginReactiveForm: any = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('^[ A-Za-z0-9_@./#&+-]*$')]],
    password: ['', [Validators.required,Validators.pattern('^[ A-Za-z0-9_@./#&+-]*$')]]
    
  })

  sendPostData(recivePostData: any) {
    
    if(this.loginReactiveForm.valid){
      console.log(recivePostData)
      this.apiService.LoginDatapost('http://192.168.1.123/boilerplate/api/web/v1/libmag/loginmethod', (recivePostData))
        .subscribe(res => {
          this.postData = res
          console.log(this.postData)
  
          JSON.stringify(localStorage.setItem('data', JSON.stringify(this.postData.data.data)))
          localStorage.setItem('name', this.postData.data.data.name)
          localStorage.setItem('userid', this.postData.data.data.user_id)
          localStorage.setItem('token', this.postData.data.data.token)
          localStorage.setItem('username', this.postData.data.data.username)
          localStorage.setItem('role_id', this.postData.data.data.role_id)
          this.roleId = localStorage.getItem('role_id')
          // console.log(localStorage.getItem('role_id'))
  
          this.auth.saveAuth(this.postData.data.data.token).then((e: any) => {
            console.log(e)
            if (this.roleId == 0) {
              this.router.navigateByUrl("/admin/dashboard")
            }
            else if (this.roleId == 1) {
              this.router.navigateByUrl("/usermodule/userdashboard")
            }
          })
       })
    }
  }
}

