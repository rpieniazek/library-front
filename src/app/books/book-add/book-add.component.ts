import {Component, OnInit} from '@angular/core';
import {Book} from "../book.model";

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  book: Book = new Book();

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('saving', this.book);
  }

  get diagnostic() {
    return JSON.stringify(this.book);
  }
}
