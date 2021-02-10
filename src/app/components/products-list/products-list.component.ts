import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
products:Product[];
currentCategoryId:number;
  constructor (private productservice:ProductService, private route:ActivatedRoute){}
  /* constructor(private produitservice:ProductService) { } */

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(()=>{
      this.listerproduits()});

  }
  listerproduits(){
    const hasCategoryId:boolean=this.route.snapshot.paramMap.has('id');
    if(hasCategoryId){
      this.currentCategoryId=+this.route.snapshot.paramMap.get('id');
    }
    else{
      this.currentCategoryId=1;
    }
    this.productservice.getproductlist(this.currentCategoryId).subscribe(data=>{this.products=data;})
    
  }
  /* listerproduits(){
    this.produitservice.getproductlist().subscribe(data => {this.products=data;})
  } */
}
