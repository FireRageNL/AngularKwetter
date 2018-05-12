import {Injectable} from '@angular/core';
import {Restangular} from 'ngx-restangular';

@Injectable()
export class FollowService {

  constructor(private restAngular: Restangular) {
  }

  followPerson(user: string) {
    this.restAngular.all('follow/' + localStorage.getItem('username') + '/' + user).post({}, {}, {Authorization: 'Bearer'  + localStorage.getItem('login')});
  }

  unfollowPerson(user: string) {
    this.restAngular.all('follow/' + localStorage.getItem('username') + '/' + user).remove({}, {Authorization: 'Bearer'  + localStorage.getItem('login')});
  }

  getAllFollowings() {
    return this.restAngular.all('follow/' + localStorage.getItem('username')).getList('', {Authorization: 'Bearer'  + localStorage.getItem('login')});
  }

}
