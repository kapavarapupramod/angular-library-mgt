import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../Models/Book.model';
Book

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  //Task-3
  // book = {
  //   Name:'ASP.NET 4.5 Black Book',
  //   Price:'629.00',
  //   Author : 'Kogent Learning Solutions Inc',
  //   thumbnails:'https://images-na.ssl-images-amazon.com/images/I/51tydxVqFXL._SX381_BO1,204,203,200_.jpg',
  //   Paperback: '1300 pages',
  //   Publisher: 'Dreamtech Press (2013)',
  //   Language: 'English',
  //   ISBN10: '9351190803',
  //   ISBN13: '978-9351190806'
  // } 

  //Task-4
  //  book1 = {
  //   Name:'ASP.NET 4.5 Black Book',
  //   Price:'629.00',
  //   Author : 'Kogent Learning Solutions Inc',
  //   thumbnails:'https://images-na.ssl-images-amazon.com/images/I/51tydxVqFXL._SX381_BO1,204,203,200_.jpg',
  //   Paperback: '1300 pages',
  //   Publisher: 'Dreamtech Press (2013)',
  //   Language: 'English',
  //   ISBN10: '9351190803',
  //   ISBN13: '978-9351190806'
  // };
  //  book2 = {
  //   Name:'ASP.NET 4.5 Black Book',
  //   Price:'629.00',
  //   Author : 'Kogent Learning Solutions Inc',
  //   thumbnails:'https://images-na.ssl-images-amazon.com/images/I/51tydxVqFXL._SX381_BO1,204,203,200_.jpg',
  //   Paperback: '1300 pages',
  //   Publisher: 'Dreamtech Press (2013)',
  //   Language: 'English',
  //   ISBN10: '9351190803',
  //   ISBN13: '978-9351190806'
  // } ;

    //Task-5,Task-6
    @Input() book :Book;
    

  constructor() { }

  ngOnInit() {
  }

}
