import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthorService {

  constructor(private http: HttpClient) {

  }

  getAuthors(): Observable<any> {
    return this.http.get('http://localhost:8888/services/authors');
  }
}
