import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "./book.model";

@Injectable()
export class BookService {

  constructor(private http: HttpClient) {
  }

  getAllBooks(): any {
    return this.http.get<Book[]>('http://localhost:8888/services/books');
  }

}
