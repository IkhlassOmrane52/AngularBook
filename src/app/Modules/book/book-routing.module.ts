import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookComponent} from './book/book.component';

const routes: Routes = [
  {
    path: '',
    component:BookComponent,
  },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forChild(routes) ],
})
export class BookRoutingModule { }