import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  today= new Date();
  discount = Math.floor(Math.random()*11);
  applyColors=false;
  isWinter:boolean;
  imageWidth=500;
  items=["plants","bars"];
  headStyle={"color":this.discount<=5?"black":"red", "fontStyle":this.discount<8?"normal":"italic"}

  constructor(private title: Title) {
    console.log("home CTR");
    let date=new Date();
    let month=date.getMonth();
    this.isWinter=month==12||month==1||month==2;
    this.isWinter=!this.isWinter;
   }

  ngOnInit(): void {
    this.title.setTitle("Home");
  }

  increaseWidth(){
    this.imageWidth+=10;
  }
  decreaseWidth(){
    this.imageWidth-=10;
  }
  resetWidth(){
    this.imageWidth =500;
  }


 // window.sessionStorage.setItem("token","aaaaa");
 // window.sessionStorage.getItem("token");

}
