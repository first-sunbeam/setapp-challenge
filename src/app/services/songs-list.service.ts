import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SongsListService {
  private url = 'https://itunes.apple.com/us/rss/topalbums/';

  constructor(private http: HttpClient) { }
  /**
   * @param limit of songs per request
   *
   * @example
   * service.get(100) return 100 songs
   *
   * @returns list of songs
   */

  get(limit: number) {
    return this.http.get(this.url + 'limit=' + limit + '/json')
      .pipe(
        retry(3),
        catchError(error => this.handleError(error)));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Error:', error.error.message);
    } else {
      console.error(
        `Backend status ${error.status}, ` +
        `error: ${error.error}`);
    }
    return throwError(
      'Please try again later.');
  }
}
