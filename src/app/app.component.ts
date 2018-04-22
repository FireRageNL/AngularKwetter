import { Component } from '@angular/core';
import {AccountService} from './services/account.service';
import {NavbarLoginModel} from './model/navbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  navbar: NavbarLoginModel;


  logoutClick() {
    this.accountService.logout();
    console.log('we be logged out');
  }
  constructor(private accountService: AccountService) {
    if (localStorage.getItem('username') != null) {
      this.navbar = new NavbarLoginModel(localStorage.getItem('username')); }
  }
}
