import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userName: string;
  password: string;
  mouseOverLogin: boolean = false;
  loginInvalid: boolean = false;

  constructor(private authService: AuthService, private router: Router) {

  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password).subscribe((response) => {
      if (!response) {
        this.loginInvalid = true;
      } else {
        this.router.navigate(['events']);
      }
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }
}