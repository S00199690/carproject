import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public UserType: string;
  constructor() { }


  isAdmin(): boolean {
    if (this.UserType == "admin")
      return true;
    else return false;
  }

}
