import { CreateEventComponent } from "../../create-event/create-event.component";

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you want to cancel?');
  }

  return true;
}