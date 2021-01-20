import { Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found.component';
import { CreateEventComponent } from './events/create-event/create-event.component';

import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventsListComponent } from "./events/events-list/events-list.component";
import { EventRouteActivator } from './events/shared/guards/event-route-activator.service';
import { EventListResolver } from './events/shared/services/events-list-resolver.service';

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
    canActivate: [EventRouteActivator],
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