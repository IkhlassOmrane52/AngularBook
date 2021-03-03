import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/shared/Services/book.service';

import { Book } from 'src/app/shared/Class/book/book';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  books!: Book[];
	
	responsiveOptions!:any;

	constructor(private Service: BookService) { 
		this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}

	ngOnInit() {
    this.Service.getData().subscribe(res => { this.books = res });

		
    }
   








}
