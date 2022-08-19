import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Post } from 'src/app/Post';

@Component({
  selector: 'app-add-text',
  templateUrl: './add-text.component.html',
  styleUrls: ['./add-text.component.css']
})
export class AddTextComponent implements OnInit {

  name = new FormControl('');
  desc = new FormControl('');
  color1 = new FormControl('');
  color2 = new FormControl('');
  heading!: string;
  discount!:string;
  image!: string;
  headingcolor!: string;
  discountcolor!:string;

  
  userBGs: { id: number, image: string ,  heading: string, discount: string}[] = [
    { "id": 0, "image": "assets/images/image (6).png" , "heading":"", "discount":""},
    { "id": 1, "image": "assets/images/image (2).png" , "heading":"", "discount":""},
    { "id": 2, "image": "assets/images/image (3).png" , "heading":"", "discount":""},
    { "id": 3, "image": "assets/images/image (4).png" , "heading":"", "discount":""},
    { "id": 4, "image": "assets/images/image (5).png", "heading":"", "discount":"" },
    { "id": 5, "image": "assets/images/image (1).png", "heading":"", "discount":"" },
    ];

  @Output() toAdd: EventEmitter<Post> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  
  onSubmit(){
    const post = {
      sno: Math.floor(Math.random() * 100),
      heading: this.heading,
      discount: this.discount,
      image: this.image,
      headcolor:"",
      discolor:"",
      active: true
    }
   
    console.log(post);
    this.toAdd.emit(post);

  }
  
  

}
