import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private route: Router) { }

  Authenticated = false;

  async saveAuth(token: any) {
    await localStorage.setItem("token", token)
    this.Authenticated = true;
    return true;
  }
  
  isAuthenticated() {
    return this.Authenticated
  }

  // isLoggedIn(){
  //   return localStorage.getItem('token')!=null
  // }

  isloggedOut() {
    console.log('loged out auth service')
    localStorage.clear()
    // this.route.navigate(['/loginform'])
  }

}