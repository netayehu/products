import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // public m1(x:any,y:number,z:string|null,a?:any):string|null{
  //   console.log(x);
  //   console.log(y);
  //   console.log(z);
  //   console.log(a);
  //   if(a==undefined){
  //     console.log("a is undefined");
  //     return "aaa";
  //   }
  // }

  //   public m2(x:any,y:number,z:string|null) {
  //     this.m1(x,y,z);
  //   }
    
  // }

}
