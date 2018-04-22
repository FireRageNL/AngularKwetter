import {Component, OnInit} from '@angular/core';
import {AccountService} from './services/account.service';
import {NavbarLoginModel} from './model/navbar';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  navbar: NavbarLoginModel;


  logoutClick() {
    this.accountService.logout();
    console.log('we be logged out');
  }
  constructor(private accountService: AccountService, private route: Router) {
    this.setNavbar();
  }

  setNavbar() {
    if (localStorage.getItem('username') != null) {
      this.navbar = new NavbarLoginModel(localStorage.getItem('username')); }
  }
  ngOnInit(): void {
    this.route.events.subscribe(test => this.setNavbar());
  }

}
