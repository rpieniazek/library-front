import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BooksComponent} from './books/books.component';
import {BooksListComponent} from './books/books-list/books-list.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {BookService} from "./books/book.service";
import {BookAddComponent} from './books/book-add/book-add.component';
import {FormsModule} from "@angular/forms";
import {AuthorService} from "./author/author.service";

const appRouter: Routes = [
  {
    path: 'books', component: BooksComponent,
  },
  {
    path: 'book/add', component: BookAddComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BooksListComponent,
    BookAddComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouter),
    HttpClientModule,
    FormsModule
  ],
  providers: [BookService,
    AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
