import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { EventsService } from "./events.service";

@Injectable({
  providedIn: 'root',
})
export class EventResolver implements Resolve<any> {
  constructor(private eventsService: EventsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.eventsService.getEvent(route.params['id']);
  }
}