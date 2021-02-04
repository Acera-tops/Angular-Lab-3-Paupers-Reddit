import { Component, Input, OnInit } from '@angular/core';

interface Post {
  data: {
  title: string;
  permalink: string;
  thumbnail: string;
  }
}

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() post: Post;
  constructor() { }

  ngOnInit(): void {
  }

}
