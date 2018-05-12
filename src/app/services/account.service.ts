import {Injectable} from '@angular/core';
import {Restangular} from 'ngx-restangular';
import {LoginModel, LoginValidationModel, RegistrationModel} from '../model/account';
import {Router} from '@angular/router';

@Injectable()
export class AccountService {

  constructor(private restAngular: Restangular, private router: Router) {
  }

  getAll() {
    return this.restAngular.all('account/getall').getList('', {Authorization: 'Bearer'  + localStorage.getItem('login')});
  }

  getById(id: number) {
    return this.restAngular.one('account', id).get();
  }

  getByUsername(username: string) {
    return this.restAngular.one('account/search' , username).get({}, {Authorization: 'Bearer'  + localStorage.getItem('login')});
  }

  registerUser(userModel: RegistrationModel) {
    return this.restAngular.all('account/createUser').post(userModel);
  }

  login(loginModel: LoginModel) {
    this.restAngular.all('login').post(loginModel).subscribe(res => {
      const mod = res as LoginValidationModel;
      if (mod.valid === 1) {
      localStorage.setItem('login', mod.Token);
      localStorage.setItem('username', mod.username);
        this.router.navigate(['/home']);

        return true;
      }
      return false;
}); }

  logout() {
    this.restAngular.all('logout/' + localStorage.getItem('username')).post(localStorage.getItem('username')).subscribe(res => {
      localStorage.removeItem('login');
      localStorage.removeItem('username');
      this.router.navigate(['']);
    });
  }
}
