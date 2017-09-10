import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books = [
    {
      "id": 1,
      "version": 0,
      "genre": "CRIME",
      "year": 2003,
      "title": "Nie mów nikomu",
      "author": "Coben"
    },
    {
      "id": 2,
      "version": 0,
      "genre": "CRIME",
      "year": 2006,
      "title": "Wszyscy mamy tajemnice",
      "author": "Coben"
    },
    {
      "id": 3,
      "version": 0,
      "genre": "IT",
      "year": 2004,
      "title": "Clean Code",
      "author": "Knuth"
    },
    {
      "id": 4,
      "version": 0,
      "genre": "IT",
      "year": 1992,
      "title": "Sztuka programowania",
      "author": "Martin"
    }
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
