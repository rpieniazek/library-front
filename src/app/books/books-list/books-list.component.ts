import {Component, OnInit} from '@angular/core';
import {BookService} from "../book.service";
import {Book} from "../book.model";

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.books = this.bookService.getAllBooks()
      .subscribe(response => {
        this.books = response;
        console.log(this.books);
      });
  }
}
