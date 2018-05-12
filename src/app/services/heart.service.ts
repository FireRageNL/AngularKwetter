import { Injectable } from '@angular/core';
import {Restangular} from 'ngx-restangular';

@Injectable()
export class HeartService {

  constructor(private restAngular: Restangular) {
  }

}
