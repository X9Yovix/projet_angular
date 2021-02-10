import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/Operators';
import { EmbeddedTemplateAst } from '@angular/compiler';
import { ProductCategory } from '../common/product-category';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url='http://localhost:8981/api';

  //old
  /* constructor(private httpclient:HttpClient) { }
  getproductlist(thecategoryid:number):Observable<Product[]>{
    const urlsearch : string=`${this.url}/products/search/findByCategoryId?id=${thecategoryid}`
    return this.httpclient.get<GetResponse>(urlsearch).pipe(map(response=>response._embedded.products))
  }
  getProductCategories():Observable<ProductCategory[]>{
    const urlsearch: string=`${this.url}/productsCategories`
    return this.httpclient.get<GetResponse2>(urlsearch).
    pipe(map(response=>response._embedded.productCategory));
  } */
  
  getProductCategories():Observable<ProductCategory[]>{
    const urlsearch: string=`${this.url}/productCategories`
    return this.httpclient.get<GetResponse2>(urlsearch).
    pipe(map(response=>response._embedded.productCategories));
  }

  constructor(private httpclient:HttpClient) { }
  getproductlist(thecategoryid:number):Observable<Product[]>{
    const urlsearch : string=`${this.url}/productCategories/${thecategoryid}/products`
    return this.httpclient.get<GetResponse>(urlsearch).pipe(map(response=>response._embedded.products))
  }
  /* getproductlist():Observable<Product[]>{
    return this.httpclient.get<GetResponse>(this.url).pipe(map(response=>response._embedded.products))
    
  } */
    
}
interface GetResponse{
  _embedded:{
    products:Product[];
  }
}

interface GetResponse2{
  _embedded:{
    productCategories:ProductCategory[];
  }
}