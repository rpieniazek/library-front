import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BooksComponent} from './books/books.component';
import {BooksListComponent} from './books/books-list/books-list.component';
import {RouterModule, Routes} from "@angular/router";

const appRouter: Routes = [{
  path: 'books', component: BooksComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BooksListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouter, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
