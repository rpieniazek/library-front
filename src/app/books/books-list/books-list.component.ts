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
    this.bookService.getAllBooks()
      .subscribe(response => {
        this.books = response;
        console.log(this.books);
      });
  }

  delete(id: number) {
    console.log('deleting');
  }

  edit() {
    console.log('edit');
  }
}
