import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {MessageModule} from "primeng/message";
import {ToastModule} from "primeng/toast";
import { HomeComponent } from './home.component';
import {CarouselModule} from 'primeng/carousel';

import { MainComponent } from './Components/main/main.component';
import { MessagesModule } from 'primeng/messages';
import {BookService} from '../../shared/Services/book.service';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [HomeComponent,MainComponent, ],
  imports: [
    CarouselModule,
    CommonModule,
    HomeRoutingModule,
    MessageModule,
    MessagesModule,
    ToastModule,ButtonModule,CardModule
  ],
  providers: [BookService],
})
export class HomeModule { }