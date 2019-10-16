import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import {map} from 'rxjs/operators';
import { Post } from '../models/post-model';
import { post } from 'selenium-webdriver/http';
import { Comentario } from '../models/comentario-model';



@Injectable({
  providedIn: 'root'
})
export class DbService {

  APIURL = 'https://jsonplaceholder.typicode.com/';
  posts: any;
  comentarios: any;

  
  constructor(private http: HttpClient) { 
     this.http.get(this.APIURL+'posts/').subscribe(
       (posts) => {
         this.posts = posts;
        }
     );
  }


  getPosts(): Observable<Post[]>{
    const postObs: Observable<Post[]> = of(this.posts);
    return postObs;
  }

  deletePostById(id){
    for( var i = 0; i < this.posts.length; i++){ 
      if ( this.posts[i].id === id) {
     this.posts.splice(i, 1); 
        }
    }
  }

  addPost(){
    const data: Post = {
      userId: 1,
      title: 'My new Post',
      body: 'Hello world'
    }
    
    this.http.post<Post>(this.APIURL+ 'posts/', data).pipe(
      map( post => {
        this.posts.push(post);
      })
    ).subscribe();

  }


  getComentarios(id: any){
    console.log(this.APIURL+`comments?postId=${id}`);
    this.comentarios = this.http.get(this.APIURL+`comments?postId=${id}`);
  }


  getPostById(id: any){
    this.http.get(this.APIURL+`post/${id}`);
  }

}
