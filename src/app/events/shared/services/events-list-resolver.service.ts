import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EventsService } from "./events.service";

@Injectable({
  providedIn: 'root',
})
export class EventListResolver implements Resolve<any> {
  constructor(private eventsService: EventsService) {}

  resolve() {
    return this.eventsService.getEvents();
  }
}