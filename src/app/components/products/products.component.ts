import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable, Observer, Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products !:Product[];
  private subscription ! : Subscription;

  constructor(private titleService:Title, private proService:ProductsService, private router: Router) { 

  }

  ngOnInit(): void {
    this.titleService.setTitle("products");
    // this.products=this.proService.getAllProducts();

    let subscriber:Partial<Observer<Product[]>>={
      next:(arr)=>{ this.products=arr;},
    
      complete:()=>{
        this.subscription.unsubscribe();
        console.log("unsubscribe");
        
      },
      error:(e)=>{
        alert(e.error.message);
        console.dir(e);
        this.router.navigate(["/login"]);
      }
    
    };
    // let observable: Observable<Product[]>= this.proService.getAllProductsAsynch();
    let observable1: Observable<Product[]>= this.proService.getAllProductsHttp();

    this.subscription= observable1.subscribe(subscriber);
  }

  public activateService(){
    this.proService.x();
  }

}
