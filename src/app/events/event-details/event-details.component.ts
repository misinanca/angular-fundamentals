import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { IEvent } from "../shared/models/event.model";
import { EventsService } from "../shared/services/events.service";

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(private eventsService: EventsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.event = this.eventsService.getEvent(+params['id']);
    });
  }
}