import { Component } from '@angular/core';
import { ProductsService } from './products.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  searchText = '';


  
constructor(private productService: ProductsService){}

ngOninit(){
 
}

onChangeValue(){
 // console.log(this.searchText);
 this.productService.setSearchText(this.searchText);
}

}