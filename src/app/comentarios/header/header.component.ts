import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() comentario;
  @Input() total;
  email: string;
  
  constructor() { }

  ngOnInit() {
    this.email = localStorage.getItem('email');
  }

}
