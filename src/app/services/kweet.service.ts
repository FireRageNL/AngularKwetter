import {Injectable} from '@angular/core';
import {Restangular} from 'ngx-restangular';
import {KweetModel} from '../model/kweet';


@Injectable()
export class KweetService {

  constructor(private restAngular: Restangular) {
  }

  getKweetsFromUser(username: string) {
    return this.restAngular.one('kweet', username).get({}, {Authorization: 'Bearer'  + localStorage.getItem('login')});
  }

  postKweet(model: KweetModel) {
    return this.restAngular.all('kweet').post(model, {}, {Authorization: 'Bearer'  + localStorage.getItem('login')});
  }
}
