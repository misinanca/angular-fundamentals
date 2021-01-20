import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { IEvent, ISession } from "../events/shared/models/event.model";
import { EventsService } from "../events/shared/services/events.service";
import { AuthService } from "../user/auth.service";

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent {
  searchTerm: string = '';
  foundSessions: ISession[];
  events: IEvent[];

  constructor(private authService: AuthService, private eventsService: EventsService, private router: Router) { }

  ngOnInit() {
    this.eventsService.getEvents().subscribe((data) => this.events = data);
  }

  searchSessions(searchTerm) {
    this.eventsService.searchSessions(searchTerm).subscribe((sessions) => {
      this.foundSessions = sessions;
    });
  }

  logout() {
    this.authService.logout()
      .subscribe(() => this.router.navigate(['/users/login']));
  }
}