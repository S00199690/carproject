import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Car } from "./car";
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseApiService {
  apiURL = 'https://us-central1-car-project-c95d7.cloudfunctions.net';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getCars(): Observable<Car> {
    return this.http.get<Car>(this.apiURL + '/getCars')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  addCar(make: string, model: string, engine: string, transmission: string, imageURL: string): Observable<Car> {
    return this.http.post<Car>(this.apiURL + '/addCar?make=' + make + '&model=' + model + '&engine=' + engine
      + '&transmission=' + transmission + '&imageURL=' + imageURL, null)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  delCar(id: string): Observable<Car> {
    return this.http.delete<Car>(this.apiURL + '/deleteCar?id=' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
}

