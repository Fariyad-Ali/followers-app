import { PostService } from 'services/post.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { httpFactory } from '@angular/http/src/http_module';
@Component({
  selector: 'http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent implements OnInit{

posts:any[];


constructor(private service:PostService){
  
}

createPost(input:HTMLInputElement){

  let  post={title:input.value};
  this.posts.splice(0,0,post);
  this.service.create(post).
    subscribe(response=>{
      //post['id']=response.json().id;
      
     // console.log(response);
    },error=>{
      console.log("error");
this.posts.splice(0,1);
    }
      
     );
  }


  ngOnInit(): void {
    this.service.getPosts().
    subscribe(
     posts=> this.posts=posts
    );
  
  }
updatePost(post){
  this.service.updatePost(post.id)
  .subscribe(response=>{
    console.log(response.json());
  });

}

deletePost(post){
 this.service.deletePost(post.id).then(()=>{
  //.subscribe(response=>{
    let index=this.posts.indexOf(post);
  this.posts.splice(index,1);
    console.log("deleted");
  }
  );

}

}
