import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

  @Input()
  public imgSrc ! : string;

  @Output()
  public imagClicked = new EventEmitter<string>();

  public emitEvent(){
    this.imagClicked.emit(this.imgSrc);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
