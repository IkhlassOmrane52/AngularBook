import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../shared/Services/book.service';
import { Book } from '../../../shared/Class/book/book';
import { Type } from '../../../shared/Class/type/type';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  styles: [`
  :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
`],
providers: [MessageService,ConfirmationService]
})
export class BookComponent implements OnInit {
  bookDialog!: boolean;
  bookaddDialog!: boolean;

  books!: any;

  book!: Book;

  selectedBook!: Book[];
  Book: Book = {
    id: null,
    name: null,
    author: null,

  };
  val:any;
  submitted!: boolean;
  constructor(private Service: BookService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
   
    this.Service.getData().subscribe(res => { this.books = res });
  }
  openBook() {
    this.book = this.book;
    this.submitted = false;
    this.bookaddDialog = true;
}
deleteSelectedBooks() {
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.books = this.books.filter((val: Book) => !this.selectedBook.includes(val));
         //this.selectedType = null;
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'typesDeleted', life: 3000});
      }
  });
}

editBook(book: Book) {
  this.book = {...book};
  this.bookDialog = true;
}
insertBook() {
  console.log(this.Book);

  this.Service.insertBook(this.Book).subscribe(res => { this.ngOnInit() }, error => { console.log(error) });
  this.bookaddDialog = false;
  this.messageService.add({severity:'success', summary: 'Successful', detail: 'type book created', life: 3000});

}

deleteBook(book: Book) {
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + this.book.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.books = this.books.filter((val: { id: any; }) => {val.id !== book.id});
          this.book = {...this.book};
          this.Service.deleteType(book.id).subscribe(res => { this.ngOnInit() });

          this.messageService.add({severity:'success', summary: 'Successful', detail: 'book Deleted', life: 3000});
      }
  });
}

hideDialog() {
  this.bookDialog = false;
  this.submitted = false;
}

saveBook() {
  this.submitted = true;

  if (this.book.name.trim()) {
      if (this.book.id) {
          console.log('hii')
          this.Service.putBook(this.book.id,this.book).subscribe(res => { this.ngOnInit() }, error => { console.log(error) });
       
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Type Updated', life: 3000});
      }
      

      this.books = [...this.books];
      this.bookDialog = false;
      this.book = {...this.book};
  }
}

findIndexById(id: string): number {
  let index = -1;
  for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id === id) {
          index = i;
          break;
      }
  }

  return index;
}


}

  


