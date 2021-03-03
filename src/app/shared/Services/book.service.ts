import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Book} from '../Class/book/book';
import {Type} from '../Class/type/type';


@Injectable({  providedIn: 'root'

})

export class BookService {
  private apiUrl: string = environment.baseURL;


  formData!  : Book;
  list! : Book[];
  //readonly rootURL ="http://localhost:8000/api"

  constructor(private http : HttpClient) { }

  insertBook(book : Book): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    
   return this.http.post(`${this.apiUrl}/book`,JSON.stringify(book),{headers: headers});
    
  }
  insertType(type : Type): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    //console.log(type);
   return this.http.post(`${this.apiUrl}/bookType`,JSON.stringify(type),{headers: headers});
    
  }

  getData(): Observable<any>{
    return this.http.get(`${this.apiUrl}/books`);
    
  }
  getType(){
    return this.http.get(`${this.apiUrl}/booksType`);
    
  }

  putBook(id : number,data:any ){
    return this.http.put(`${this.apiUrl}/books/${id}`, data);
     
   }
   putType(id : number,data:any ){
    return this.http.put(`${this.apiUrl}/bookType/${id}`, data);
     
   }

   deleteBook(id : number){
    return this.http.delete(`${this.apiUrl}/books/${id}`);
   }
   
   deleteType(id : number){
    return this.http.delete(`${this.apiUrl}/bookType/${id}`);
   }
  
  }