import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Product, shirts } from './product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  searchText = '';
  products: Array<Product> = new Array();
  shirts: Array<shirts> = new Array();
  constructor(private http: HttpClient) {
  }


  getAllProduts(): Observable<any> {

    return this.http.get('http://localhost:3000/db');

  }

  setSearchText(searchText: string) {
    console.log('search', searchText)
    this.searchText = searchText;
    console.log(this.products);
    this.products = this.products.filter(p=>p.about?.toLowerCase().includes(searchText.toLowerCase())
    || p.brand?.toLowerCase().includes(searchText.toLowerCase()));
    this.shirts = this.shirts.filter(s=>s.about?.toLowerCase().includes(searchText.toLowerCase())
    || s.brand?.toLowerCase().includes(searchText.toLowerCase()));
   };
  
  setProducts(products: Array<Product>){
    console.log('set');
    this.products = products;
  }


  setshirts(shirts: Array<shirts>){
    this.shirts= shirts;
  }
}

