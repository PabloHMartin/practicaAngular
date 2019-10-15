import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post;
  @Output() postId = new EventEmitter();

  constructor() {
   }

  ngOnInit() {
  }

  sendIdToParent(event){
    this.postId.emit({id: this.post.id});
  }

}
