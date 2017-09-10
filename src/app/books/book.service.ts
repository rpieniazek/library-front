import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "./book.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BookService {

  constructor(private http: HttpClient) {
  }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:8888/services/books');
  }

  delete(id: number) {
    return this.http.delete('http://localhost:8888/services/book/' + id);
  }
}
