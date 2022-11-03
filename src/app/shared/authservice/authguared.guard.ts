import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthguaredGuard implements CanActivate {
  constructor(
    private auth: AuthserviceService,
    private route: Router,
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    var authCheck = this.auth.isAuthenticated();
    if (authCheck) {
      return true
    }

    else {
      this.route.navigate(['/loginform'])
      return false
    }

  }
}


