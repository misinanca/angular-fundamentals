import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Anca',
      lastName: 'Misin',
    };
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName, lastName) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}