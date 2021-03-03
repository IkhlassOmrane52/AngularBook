import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TypeComponent} from '../TypeBook/type/type.component';

const routes: Routes = [
  {
    path: '',
    component:TypeComponent,
  },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forChild(routes) ],
})
export class TypeBookRoutingModule { }