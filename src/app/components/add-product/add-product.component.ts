import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public product: Product = new Product();
  

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
  }

  public addProduct(){
    console.log(this.product);
    let subscription= this.productService.addProduct(this.product).subscribe({
      next:(id)=>{ 
        console.log("add product: "+id);
        alert("add product: "+id);
      },
      error:(e)=>{
        console.dir(e);
        alert(e.error.message);
        
      },
      complete:()=>{
        subscription.unsubscribe();
      }
    });
    
  }

  public disp(info:any){
    console.dir(info);
    
  }

}
