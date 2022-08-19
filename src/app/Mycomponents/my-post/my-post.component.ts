import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Post';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.css']
})
export class MyPostComponent implements OnInit {

  posts!: Post[];
  
  
  constructor() { 
    
  }

  ngOnInit(): void {
  }
 
  

}
