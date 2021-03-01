import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Book} from './book';
import {Type} from './type';


@Injectable({  providedIn: 'root'

})

export class BookService {


  formData!  : Book;
  list! : Book[];
  readonly rootURL ="http://localhost:8000/api"

  constructor(private http : HttpClient) { }

  insertBook(book : Book): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    console.log(book);
   return this.http.post('http://localhost:8000/api/book',JSON.stringify(book),{headers: headers});
    
  }
  insertType(type : Type): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    //console.log(type);
   return this.http.post('http://localhost:8000/api/bookType',JSON.stringify(type),{headers: headers});
    
  }

  getData(): Observable<any>{
    return this.http.get('http://localhost:8000/api/books');
    
  }
  getType(){
    return this.http.get('http://localhost:8000/api/booksType');
    
  }

  putBook(id : number,data:any ){
    return this.http.put('http://localhost:8000/api/books/'+id, data);
     
   }
   putType(id : number,data:any ){
    return this.http.put('http://localhost:8000/api/bookType/'+id, data);
     
   }

   deleteBook(id : number){
    return this.http.delete('http://localhost:8000/api/books/'+id);
   }
   
   deleteType(id : number){
    return this.http.delete('http://localhost:8000/api/bookType/'+id);
   }
  
  }