import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenuModule} from 'primeng/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Core/menu/header/header.component';
import { MenuComponent } from './Core/menu/menu.component';
import { TabMenuModule } from 'primeng/tabmenu';
import {ToolbarModule} from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import {BadgeModule} from 'primeng/badge';
import {MegaMenuModule} from 'primeng/megamenu';

import { SplitButtonModule } from 'primeng/splitbutton';
import {TableModule} from 'primeng/table';
import { BookService } from './shared/Services/book.service';
import {FileUploadModule} from 'primeng/fileupload';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {SidebarModule} from 'primeng/sidebar';

import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {CardModule} from 'primeng/card';
//import { EditTypeComponent } from './Modules/TypeBook/Components/edit-type/edit-type.component';

import {MenubarModule} from 'primeng/menubar';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
  
    //EditTypeComponent,
    
  ],
  imports: [
    BrowserModule,TabMenuModule,BadgeModule,
    BrowserAnimationsModule,MegaMenuModule,
    AppRoutingModule,TableModule,
    AccordionModule,MenuModule,ToolbarModule,ButtonModule,SplitButtonModule,HttpClientModule,
    FormsModule,    FileUploadModule,ToastModule,RatingModule,RadioButtonModule,InputNumberModule,ConfirmDialogModule
    ,InputTextareaModule,DialogModule,InputTextModule,CardModule,MenubarModule,PanelModule,OverlayPanelModule,SidebarModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
