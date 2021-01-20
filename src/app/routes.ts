import { Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found.component';
import { CreateEventComponent } from './events/create-event/create-event.component';

import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventsListComponent } from "./events/events-list/events-list.component";
import { EventListResolver } from './events/shared/services/events-list-resolver.service';
import { EventResolver } from './events/shared/services/event-resolver.service';

export const appRoutes:Routes = [
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListResolver },
  },
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    resolve: { event: EventResolver },
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
  },
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full',
  },
]