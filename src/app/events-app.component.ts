import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'events-app',
  templateUrl: './events-app.component.html',
  styleUrls: []
})
export class EventsAppComponent {
  constructor(private authService: AuthService) {  }

  ngOnInit() {
    this.authService.checkAuthenticationStatus();
  }
}
