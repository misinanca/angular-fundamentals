import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { handleError } from 'src/app/common/error-handling';
import { IEvent, ISession } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private http: HttpClient) { }

  getEvents(): Observable<IEvent[]> {
    return this.http
      .get<IEvent[]>('/api/events')
      .pipe(catchError(handleError<IEvent[]>('getEvents', [])));
  }

  getEvent(id: number): Observable<IEvent> {
    return this.http
      .get<IEvent>('/api/events/' + id)
      .pipe(catchError(handleError<IEvent>('getEvent', null)));
  }

  saveEvent(event: IEvent) {
    const options ={
      headers: new HttpHeaders({'Content-Type': '/application/json'}),
    };

    return this.http
      .post<IEvent>('/api/events', event, options)
      .pipe(catchError(handleError<IEvent>('saveEvent', null)));
  }

  searchSessions(searchTerm: string): Observable<ISession[]> {
    return this.http
      .get<ISession[]>(`/api/sessions/search?search=${searchTerm}`)
      .pipe(catchError(handleError<ISession[]>('searchSessions', [])));
  }
}