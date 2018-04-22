import {Account} from './account';

export class Kweet {
  constructor(public id: number,
              public owner: Account,
              public messageContents: string) {
  }
}
