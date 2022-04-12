import { People } from './people.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Injectable()
export class PeopleService {
  http: HttpClient;
  // create your own mock api addressbook containing
  // id, lastname, firstname, phone
  apiURL = "https://621644827428a1d2a36169ad.mockapi.io";




  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllPeople(): Observable<People[]> {
    return this.http.get<People[]>(this.apiURL + '/api/vi/people?sortBy=lastname')
      .pipe(
        tap(people => console.log("just a log message")
        ));
  }

  createPerson(people: People): Observable<People> {
    return this.http.post<People>(this.apiURL + '/api/vi/people', people).pipe(
      tap(value => {
      })
    );
  }

  deletePerson(personId: string): Observable<any> {
    return this.http.delete(this.apiURL + '/api/vi/people/' + personId).pipe(
      tap(result => {
      })
    );
  }

  updatePerson(personId: string, person: People): Observable<any> {
    return this.http.put(this.apiURL + '/api/vi/people/' + personId, person).pipe(
      tap(result => {
      })
    );
  }
}
