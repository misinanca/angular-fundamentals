import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IEvent } from "../shared/models/event.model";

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: [ './event-thumbnail.component.css' ]
})
export class EventThumbnailComponent {
  @Input() event: IEvent;

  getStartTimeClass() {
    const isEarlyStart = this.event.time === '8:00 am';

    return isEarlyStart
      ? ['event-green', 'event-bold']
      : [];
  }
}