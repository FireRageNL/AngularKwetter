import { Component, OnInit } from '@angular/core';
import {AccountService} from '../services/account.service';
import {RegistrationModel} from '../model/account';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private accountService: AccountService) {}

  model = new RegistrationModel(null,null,null);

  onSubmit() {this.accountService.registerUser(this.model);
  this.model = new RegistrationModel(null,null,null); }

  ngOnInit() {
  }

}
