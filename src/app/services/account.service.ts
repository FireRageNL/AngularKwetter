import {Injectable} from '@angular/core';
import {Restangular} from 'ngx-restangular';
import { RegistrationModel} from '../model/account';

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
}
