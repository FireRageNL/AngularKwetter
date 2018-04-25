import { Component, OnInit } from '@angular/core';
import {Account} from '../model/account';
import {AccountService} from '../services/account.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  account: Account = new Account(null, null, null, null, null, null);

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accountService.getByUsername(localStorage.getItem('username')).subscribe(account => {this.account = account; });
  }
}
