import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/map';
import { map } from "rxjs/operators"; 
import { error } from 'util';
import { Observable } from 'rxjs';
import { AppErrorHandler } from 'src/app/common/validators/app-error-handler';

@Injectable()
export class PostService {

  private url='https://jsonplaceholder.typicode.com/posts';
  
  constructor(private http:Http) { }

  getPosts(){
    return this.http.get(this.url) .pipe(map(response=> response.json()));
  }

  updatePost(id){
    return this.http.patch(this.url+"/"+id,JSON.stringify({isRead:true}));
  }
  deletePost(id){
    return this.http.delete(this.url+"/"+id).toPromise();
  }
  create(post){
    //return  Observable.throw;
    
    return this.http.post('httkps://jsonplaceholder.typicode.com/posts',JSON.stringify(post));
    //.pipe(map(response=>response.json()));
  }
}
