import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book.service';
import { Book } from '../shared/book';
import { Type } from '../shared/type';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  books: any;
  types: any;
  bookDialog!: boolean;
  display: boolean = false;
  add: boolean = false;
  displayBasic: boolean = false;
  displayType: boolean = false;

  book: Book = {
    id: null,
    name: null,
    author: null,

  };
  type: Type = {
    id: null,
    name: null,
    details: null,

  };

  id!: number;
  name: any;
  submitted!: boolean;

  constructor(private service: BookService) { }
  ngOnInit(): void {
    this.getBooks();
    this.getBooksType();
  }
  showDialog() {
    this.add = true;
  }



  getBooks() {
    this.service.getData().subscribe(res => { this.books = res });

  }
  getBooksType() {
    this.service.getType().subscribe(res => { this.types = res });

  }

  selectedBook(book: Book) {
    console.log(book);
    this.id = book.id;
    this.book = book;
  }

  selectedType(type: Type) {
    this.id = type.id;
    this.type = type;
  }
  deleteData(id: number) {
    console.log('delete');
    this.service.deleteBook(id).subscribe(res => { this.getBooks() });
  }
  deleteType(id: number) {

    this.service.deleteType(id).subscribe(res => { this.getBooksType() });
  }

  showBasicDialog() {
    this.displayBasic = true;
  }
  showTypeDialog() {
    this.displayType = true;
  }

  hideDialog() {
    this.bookDialog = false;
    this.submitted = false;
  }


  insertData() {
    console.log(this.book);

    this.service.insertBook(this.book).subscribe(res => { this.getBooks() }, error => { console.log(error) });
    this.displayBasic = false;


  }
  insertType() {
    console.log(this.type);

    this.service.insertType(this.type).subscribe(res => { this.getBooksType() }, error => { console.log(error) });
    this.displayType = false;

  }
}