import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenuModule} from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import {ToolbarModule} from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import {TableModule} from 'primeng/table';
import {FileUploadModule} from 'primeng/fileupload';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { BookRoutingModule } from './book-routing.module';

import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {CardModule} from 'primeng/card';
import { EditComponent } from './Components/edit/edit.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
 EditComponent,BookComponent 
  
  ],
  imports: [BookRoutingModule,
    BrowserModule,TabMenuModule,
    BrowserAnimationsModule
    ,TableModule,
    AccordionModule,MenuModule,ToolbarModule,ButtonModule,SplitButtonModule,HttpClientModule,
    FormsModule,    FileUploadModule,ToastModule,RatingModule,RadioButtonModule,InputNumberModule,ConfirmDialogModule
    ,InputTextareaModule,DialogModule,InputTextModule,CardModule
  ],
  providers: [],
  bootstrap: []
})
export class BookModule { }
