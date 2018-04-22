export class Account {

  constructor(public id: number,
              public username: string,
              public email: string,
              public followers: number,
              public following: number,
              public biography: string
              ) {

  }
}

export class RegistrationModel {

  constructor(public username: string,
              public email: string,
              public passwordHash: string) {

  }
}

export class LoginModel {

  constructor(public username: string,
              public password: string) {

  }
}

export class LoginValidationModel {

  constructor(public valid: number,
              public Token: string,
              public username: string) {

  }
}
