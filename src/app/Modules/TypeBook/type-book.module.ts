import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccordionModule} from 'primeng/accordion';     
import {MenuItem} from 'primeng/api';                  
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
import { TypeBookRoutingModule } from './type-book.routing.module';
import { TypeComponent } from './type/type.component';
//{ EditTypeComponent } from './Components/edit-type/edit-type.component';

import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    TypeComponent,//EditTypeComponent 
  ],
  imports: [
    BrowserModule,TabMenuModule,
    BrowserAnimationsModule
    ,TableModule, TypeBookRoutingModule,
    AccordionModule,MenuModule,ToolbarModule,ButtonModule,SplitButtonModule,HttpClientModule,
    FormsModule,    FileUploadModule,ToastModule,RatingModule,RadioButtonModule,InputNumberModule,ConfirmDialogModule
    ,InputTextareaModule,DialogModule,InputTextModule,CardModule
  ],
  providers: [],
  bootstrap: []
})
export class TypeBookModule { }
