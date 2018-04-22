import { Component, OnInit } from '@angular/core';
import {LoginModel} from '../model/account';
import {AccountService} from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new LoginModel(null,null)

  onSubmit() {
    this.accountService.login(this.model);

  }
  constructor(private accountService: AccountService) {}

  ngOnInit() {
  }

}
