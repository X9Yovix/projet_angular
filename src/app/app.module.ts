import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';

import { Routes,RouterModule } from '@angular/router';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component'; 

const routes:Routes=[
  {path: 'category/:id', component:ProductsListComponent},
  {path: 'category', component:ProductsListComponent},
  {path: 'products', component:ProductsListComponent},
  {path: '', redirectTo:'/products',pathMatch:'full'},
  {path: '**', redirectTo:'/products',pathMatch:'full'},
]
@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductCategoryMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
