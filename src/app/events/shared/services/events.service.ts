import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';
import { Observable, Subject } from 'rxjs';
import mockedEvents from '../../../events';
import { IEvent, ISession } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  getEvents(): Observable<IEvent[]> {
    let subject = new Subject<IEvent[]>();
    setTimeout(() => {
      subject.next(mockedEvents);
      subject.complete();
    }, 100);

    return subject;
  }

  getEvent(id: number): IEvent {
    return mockedEvents.find(e => e.id === id);
  }

  saveEvent(event: IEvent) {
    event.id = mockedEvents.length + 1;
    event.sessions = [];
    mockedEvents.push(event);
  }

  searchSessions(searchTerm: string): Observable<ISession[]> {
    const term = searchTerm.toLocaleLowerCase();
    let results: ISession[] = [];

    mockedEvents.forEach((event) => {
      let matchingSessions = event.sessions.filter((session) => session.name.toLocaleLowerCase().indexOf(term) > -1);
      matchingSessions = matchingSessions.map((session: any) => {
        session.eventId = event.id;

        return session;
      });
      results = results.concat(matchingSessions);
    })

    const observer = new Observable<ISession[]>((observer) => {observer.next(results);});

    return observer;
  }
}