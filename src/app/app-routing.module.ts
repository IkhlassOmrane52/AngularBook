import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './Modules/book/book/book.component';
import { TypeComponent } from './Modules/TypeBook/type/type.component';
import { HomeComponent } from './Modules/home/home.component';

const routes: Routes = [{path:"book", component:BookComponent},{path:"type", component:TypeComponent},{
  path: 'book',
  loadChildren: () => import('./Modules/book/book.module').then(m => m.BookModule)
},{
path: 'type',
  loadChildren: () => import('./Modules/TypeBook/type-book.module').then(m => m.TypeBookModule)
},{
  path: 'home',
    loadChildren: () => import('./Modules/home/home.module').then(m => m.HomeModule)
  }, {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
