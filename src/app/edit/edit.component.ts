import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { BookService } from '../shared/book.service';
import { Book } from '../shared/book';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input()
  book!:Book;
     display!:boolean;
  id!:number;
  data:any;
  submitted!: boolean;
  edit: boolean = false;

      constructor(private service: BookService) { }
  ngOnInit(){}

      editBookInfo(book:Book){
        console.log(book.id);
       this.id=book.id;
        this.service.putBook(this.id,this.book).subscribe(data=>{console.log(data)});
        this.display=false;
        
     }
  }
  

