import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  APIURL = 'https://jsonplaceholder.typicode.com/posts';
  posts: any;

  constructor(private http: HttpClient) { 
    this.posts = this.http.get(this.APIURL);
  }

  getPosts(){
    return this.posts;
  }

  getPostById(){}

}
