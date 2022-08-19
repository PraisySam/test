import { Component, OnInit, Output , EventEmitter} from '@angular/core';

import { Post } from "../../Post";

@Component({
  selector: 'app-myedits',
  templateUrl: './myedits.component.html',
  styleUrls: ['./myedits.component.css']
})
export class MyeditsComponent implements OnInit {

  posts:Post[];
  localItem!: string| null;

  show:boolean=false;

  constructor() { 
    this.localItem = localStorage.getItem("posts");
    if(this.localItem == null){
    this.posts = [];
    }
    else{ 
      this.posts = JSON.parse(this.localItem);
      
    }
    
  }

  ngOnInit(): void {
  }


  delete(post:Post){
    console.log(post);
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    localStorage.setItem("posts", JSON.stringify(this.posts));

  }
  add(post:Post){
    console.log(post);
    this.posts.push(post);
    localStorage.setItem("posts", JSON.stringify(this.posts));
   
  }
}
