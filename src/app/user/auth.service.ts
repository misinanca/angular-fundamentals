import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { handleError } from "../common/error-handling";
import { IUser } from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;

  constructor(private http: HttpClient) {}

  loginUser(userName: string, password: string) {
    const loginUser = {
      username: userName,
      password: password
    };
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

    return this.http.post('/api/login', loginUser, options)
      .pipe(tap(data => {
        this.currentUser = <IUser>data['user'];
      }))
      .pipe(catchError(err => {
        return of(false);
      }));
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
    return this.http.get('/api/currentIdentity')
      .pipe(tap(data => {
        if (data) {
          this.currentUser = <IUser>data;
        }
      }))
      .subscribe();
  }

  updateCurrentUser(firstName, lastName) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }

  logout() {
    this.currentUser = null;
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

    return this.http.post('/api/logout', {}, options);
  }
}