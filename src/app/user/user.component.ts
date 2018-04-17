import { Component, OnInit } from '@angular/core';
import {Account} from '../model/account';
import {AccountService} from '../services/account.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  accounts: Account[];

  interval: any;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accountService.getAll().subscribe(accounts => {this.accounts = accounts; });
    this.refresh();
  }

  refresh() {
  this.interval = setInterval(() => {
    this.accountService.getAll().subscribe(accounts => {this.accounts = accounts; }); }, 3000);
  }
}
