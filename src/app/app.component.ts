import { Component } from '@angular/core';
import { Book } from './Models/Book.model';

@Component({
  selector: 'app-root',
  //template: '<div> Angular training </div>',
  templateUrl : './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Task-1
 // title = 'Angular training';

 //Task-2
//   book1 = {
//     Name:'ASP.NET 4.5 Black Book',
//     Price:'629.00',
//     Author : 'Kogent Learning Solutions Inc',
//     thumbnails:'https://images-na.ssl-images-amazon.com/images/I/51tydxVqFXL._SX381_BO1,204,203,200_.jpg',
//     Paperback: '1300 pages',
//     Publisher: 'Dreamtech Press (2013)',
//     Language: 'English',
//     ISBN10: '9351190803',
//     ISBN13: '978-9351190806'
//   } 
// }

//Task-5
// BlackBook = {
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
// BlackBook2 = {
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


//Task-6
BlackBook: Book = {
  Name:'ASP.NET 4.5 Black Book',
  Price:'629.00',
  Author : 'Kogent Learning Solutions Inc',
  thumbnails:'https://images-na.ssl-images-amazon.com/images/I/51tydxVqFXL._SX381_BO1,204,203,200_.jpg',
  Paperback: '1500 pages',
  Publisher: 'Dreamtech Press (2013)',
  Language: 'English',
  ISBN10: '9351190803',
  ISBN13: '978-9351190806'
};
BlackBook2 : Book= {
  Name:'ASP.NET 4.6 Black Book',
  Price:'829.00',
  Author : 'Kogent Learning Solutions Inc',
  thumbnails:'https://images-na.ssl-images-amazon.com/images/I/51tydxVqFXL._SX381_BO1,204,203,200_.jpg',
  Paperback: '1300 pages',
  Publisher: 'Dreamtech Press (2013)',
  Language: 'English',
  ISBN10: '89545625',
  ISBN13: '978-89545625'
}
}
