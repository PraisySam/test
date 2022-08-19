import { Component, OnInit } from '@angular/core';

import { Post } from "../../Post";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  
  userBGs: { id: number, image: string ,  heading: string, discount: string}[] = [
    { "id": 0, "image": "assets/images/image (6).png" , "heading":"", "discount":""},
    { "id": 1, "image": "assets/images/image (2).png" , "heading":"", "discount":""},
    { "id": 2, "image": "assets/images/image (3).png" , "heading":"", "discount":""},
    { "id": 3, "image": "assets/images/image (4).png" , "heading":"", "discount":""},
    { "id": 4, "image": "assets/images/image (5).png", "heading":"", "discount":"" },
    { "id": 5, "image": "assets/images/image (1).png", "heading":"", "discount":"" },
  ];


  constructor() {
    
   }

  ngOnInit(): void {
  }



}
