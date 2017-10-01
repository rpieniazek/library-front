import {Component, OnInit} from '@angular/core';
import {Book} from "../book.model";
import {BookService} from "../book.service";
import {AuthorService} from "../../author/author.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  book: Book = new Book();
  authors = [];

  constructor(private bookService: BookService,
              private authorService: AuthorService,
              private router: Router) {
  }

  ngOnInit() {
    this.authorService.getAuthors()
      .subscribe(response => {
        console.log(response);
        this.authors = response.map(author => author.personalData.lastName);
      });
  }

  onSubmit() {
    console.log('saving', this.book);
    this.bookService.saveNewBook(this.book);
    this.router.navigate(['/books']);
  }

  get diagnostic() {
    return JSON.stringify(this.book);
  }
}
