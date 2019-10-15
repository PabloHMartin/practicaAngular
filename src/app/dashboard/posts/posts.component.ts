import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  email: string;
  receivedIdFromChild: any;

  constructor(public db: DbService) { }

  ngOnInit() {
    this.email = localStorage.getItem('email');
  }

  recieveIdFromChild(id){
    this.receivedIdFromChild = id;    
  }

}
