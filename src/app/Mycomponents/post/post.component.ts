import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { Post } from 'src/app/Post';
import { Input } from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post!: Post;
  @Output() toDelete: EventEmitter<Post>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(post: Post){
    console.log("trigged");
    this.toDelete.emit(post);

  }
  

}


