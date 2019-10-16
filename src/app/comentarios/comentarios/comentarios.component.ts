import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { Observable } from 'rxjs';
import { Comentario } from 'src/app/models/comentario-model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit{

  inputId: String;
  comentarios$: any;
  totalComentarios: any;

  constructor(public db: DbService) { }

  ngOnInit() {

  }

  getComentarios(){
    this.db.getComentarios(this.inputId);
    this.comentarios$ = this.db.comentarios;
    this.comentarios$.subscribe(result => {this.totalComentarios = result.length});
  }



}
