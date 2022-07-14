import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-pro-details',
  templateUrl: './pro-details.component.html',
  styleUrls: ['./pro-details.component.css']
})
export class ProDetailsComponent implements OnInit {

  public product !: Product;

  public readOnly: boolean=true;

  constructor(private activatedroute: ActivatedRoute, private productService: ProductsService, private router:Router) { }

  ngOnInit(): void {
    let productId= this.activatedroute.snapshot.params['id'];
    let subscription=this.productService.getOneProduct(productId).subscribe({
      next:(p)=>{
        this.product=p;
      },
      error:(e)=>{
        alert(e.error.message);
      },
      complete:()=>{
        subscription.unsubscribe();
      }
    });

  }
  public delete(){
    if(confirm("are you sure?")){
      return;
    }

    // let choice = prompt("deleting ?: "+this.product.name+ " y/n");
    // if (choice!="y"){
    //   return;
    // }
    let subscription=this.productService.delete(this.product.id).subscribe({
      next:()=>{
        this.router.navigate(["/welcome/products"])

      },
      error:(e)=>{
        alert(e.error.message);
      },
      complete:()=>{
        subscription.unsubscribe();
      }
    });

  }
  public update(){
    if(confirm("are you sure?")){
      return;
    }
    let productId= this.activatedroute.snapshot.params['id'];
    let subscription=this.productService.update(this.product).subscribe({
      next:()=>{
        alert("updated");
      },
      error:(e)=>{
        alert(e.error.message);
      },
      complete:()=>{
        subscription.unsubscribe();
      }
    });

  }

}
