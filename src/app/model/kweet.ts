import {Account} from './account';

export class Kweet {
  constructor(public id: number,
              public owner: Account,
              public messageContents: string) {
  }
}

export class KweetModel {
  constructor(public username: string,
              public kweetContents: string) {
  }
}
