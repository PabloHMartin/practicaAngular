import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() activated;
  
  constructor() { }

  ngOnInit() {    
  }
  

    ngOnChanges(changes: SimpleChanges) {
     // console.log(this.activated);
      
  }

  deletePost(){
    console.log(this.activated);
  }

}
