import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { handleError } from "src/app/common/error-handling";

import { ISession } from "../models/event.model";

@Injectable({
  providedIn: 'root'
})
export class VoterService {
  constructor(private http: HttpClient) { }

  deleteVoter(eventId: number, session: ISession, voterName: string): void {
    session.voters = session.voters.filter(voter => voter !== voterName);

    this.http
      .delete(`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`)
      .pipe(catchError(handleError('addVoter', null)))
      .subscribe();
  }

  addVoter(eventId: number, session: ISession, voterName: string): void {
    session.voters.push(voterName);
    const options ={
      headers: new HttpHeaders({'Content-Type': '/application/json'}),
    };
    
    this.http
      .post(`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`, {}, options)
      .pipe(catchError(handleError('addVoter', null)))
      .subscribe();
  }

  userHasVoted(session: ISession, voterName: string): boolean {
    return session.voters.indexOf(voterName) > -1;
  }
}