import {Injectable} from '@angular/core';
import {Restangular} from 'ngx-restangular';


@Injectable()
export class KweetService {

  constructor(private restAngular: Restangular) {
  }

  getKweetsFromUser(username: string) {
    return this.restAngular.one('kweet', username).get({},{Authorization: 'Bearer'  + localStorage.getItem('login')});
  }
}
