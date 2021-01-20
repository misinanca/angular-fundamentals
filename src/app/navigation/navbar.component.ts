import { Component } from "@angular/core";
import { ISession } from "../events/shared/models/event.model";
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

  constructor(private authService: AuthService, private eventsService: EventsService) {
    
  }

  searchSessions(searchTerm) {
    this.eventsService.searchSessions(searchTerm).subscribe((sessions) => {
      this.foundSessions = sessions;
    });
  }
}