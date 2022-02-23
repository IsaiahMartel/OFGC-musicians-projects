import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';
import { TypeSchedule } from 'src/app/models/type-schedule/type-schedule';

import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class TypeScheduleService {
  token="";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
  };


  endpoint: string = "http://localhost:8000/api/type-schedule";

  constructor(private httpClient: HttpClient, private storage:Storage) {
    this.storage.get("access_token").then((token) => {
      this.httpOptions.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
     
    })};

  getTypeScheduleById(id): Observable<TypeSchedule[]> {
    return this.httpClient.get<TypeSchedule[]>(this.endpoint + '/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Type schedule fetched: ${id}`)),
        catchError(this.handleError<TypeSchedule[]>(`Get type schedule id=${id}`))
      );
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
}
}

