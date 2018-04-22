import {Injectable} from '@angular/core';
import {Restangular} from 'ngx-restangular';
import {LoginModel, LoginValidationModel, RegistrationModel} from '../model/account';

@Injectable()
export class AccountService {

  constructor(private restAngular: Restangular) {
  }

  getAll() {
    return this.restAngular.all('account/getall').getList();
  }

  getById(id: number) {
    return this.restAngular.one('account', id).get();
  }

  registerUser(userModel: RegistrationModel) {
    return this.restAngular.all('account/createUser').post(userModel);
  }

  login(loginModel: LoginModel) {
    this.restAngular.all('login').post(loginModel).subscribe(res => {
      const mod = res as LoginValidationModel;
      if (mod.valid === 1) {
        console.log(mod);
      localStorage.setItem('login', mod.Token);
      localStorage.setItem('username', mod.username);
      return true;
      }
      return false;
}); }

  logout() {
    localStorage.removeItem('login');
    localStorage.removeItem('username');
  }
}
