import { Injectable } from '@angular/core';
import {Restangular} from 'ngx-restangular';
import { Router, CanActivate } from '@angular/router';
import {AccountService} from './account.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private rest: Restangular, private acc: AccountService) { }

  canActivate() {
    if (localStorage.getItem('username')) {
      this.rest.all('verify').post(localStorage.getItem('login')).subscribe(res => {
        if (res.valid) {
          return true;
        }
        this.acc.logout();
        this.router.navigate(['']);
        return false;
      })
      return true;
    }
    this.acc.logout();
    this.router.navigate(['']);
    return false;
  }
}
