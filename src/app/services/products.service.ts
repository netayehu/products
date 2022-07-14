import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, Subscriber } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  public addProduct( product:Product): Observable<any>{
    let url = "http://localhost:8080/api/product" ;
    let token: string | null = sessionStorage.getItem('token');
    token = token ? token : "";
    let theHeaders = new HttpHeaders({token:token});
    let options = { headers: theHeaders, responseType:undefined };
    return this.httpClient.post(url, product, options);
    

  }

  public update( product:Product): Observable<any>{
    let url = "http://localhost:8080/api/product" ;
    let token: string | null = sessionStorage.getItem('token');
    token = token ? token : "";
    let theHeaders = new HttpHeaders({token:token});
    let options = { headers: theHeaders, responseType:undefined };
    return this.httpClient.put(url, product, options);
    

  }



  public getOneProduct(productId: number): Observable<Product> {
    let token: string | null = sessionStorage.getItem('token');
    token = token ? token : "";
    let url = "http://localhost:8080/api/product/" + productId;
    let theHeaders = new HttpHeaders().set("token", token);
    let options = { headers: theHeaders };
    return this.httpClient.get<Product>(url, options);

  }

  public delete(productId: number|undefined): Observable<any> {
    let token: string | null = sessionStorage.getItem('token');
    token = token ? token : "";
    let url = "http://localhost:8080/api/product/" + productId;
    let theHeaders = new HttpHeaders().set("token", token);
    let options = { headers: theHeaders };
    return this.httpClient.delete<any>(url, options);

  }



  public getAllProductsHttp(): Observable<Product[]> {
    let token: string | null = sessionStorage.getItem('token');
    token = token ? token : "";
    let url = "http://localhost:8080/api/product";
    let theHeaders = new HttpHeaders().set("token", token);
    let options = { headers: theHeaders };
    return this.httpClient.get<Product[]>(url, options);
  }


  public getAllProducts(): Product[] {
    let arr: Product[] = [];
    arr.push(new Product(1, "cauch", 300, 30));
    arr.push(new Product(2, "cauch2", 400, 20));
    arr.push(new Product(3, "sopha", 3000, 30));
    arr.push(new Product(4, "consula", 600, 20));
    arr.push(new Product(5, "cauch3", 900, 20));
    return arr;
  }

  public getAllProductsAsynch(): Observable<Product[]> {
    let subscribe = (subscriber: Subscriber<Product[]>) => {

      if (Math.random() < 0) {
        subscriber.error("get all products fail");
        return;
      }
      let arr: Product[] = [];

      setTimeout(() => {

        arr.push(new Product(1, "cauch", 300, 30));
        arr.push(new Product(2, "cauch2", 400, 20));

        subscriber.next(arr);

      }, 3000);

      setTimeout(() => {

        arr.push(new Product(1, "cauch", 300, 30));
        arr.push(new Product(2, "cauch2", 400, 20));

        subscriber.next(arr);
        subscriber.complete();


      }, 3000);

    };
    let observable: Observable<Product[]> = new Observable(subscribe);
    return observable;
  }

  public x() {
    alert("hello from service");

  }
}
