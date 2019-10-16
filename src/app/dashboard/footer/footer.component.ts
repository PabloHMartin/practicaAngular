import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() activated;
  
  constructor(public db: DbService) { }

  ngOnInit() {    
  }


  deletePost(){
    this.db.deletePostById(this.activated.id);
    alert(`Post ${this.activated.id} deleted`);
  }

  addPost(){
    this.db.addPost();
  }

}
