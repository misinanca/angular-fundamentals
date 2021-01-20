import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IEvent } from "../shared/models/event.model";
import { EventsService } from "../shared/services/events.service";

@Component({
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
  event: IEvent;
  isDirty: boolean = true;

  constructor(private router: Router, private eventsService: EventsService) {}

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues: IEvent) {
    this.eventsService.saveEvent(formValues).subscribe((response: IEvent) => {
      this.isDirty = false;
      this.router.navigate(['/events']);
    });
  
  }
}