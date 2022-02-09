import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor() { }

  autenticaUser(user: string, password: string) {
    return user === "felipe" && password === "123" ? true : false;
}

}
