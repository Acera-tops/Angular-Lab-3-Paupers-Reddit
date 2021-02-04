import { Component, OnInit } from '@angular/core';
import { ListItemComponent } from "../list-item/list-item.component";
import {RedditApiService} from "../reddit-api.service";

interface Post {
  data: {
  title: string;
  permalink: string;
  thumbnail: string;
  }
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [RedditApiService]
})
export class ListComponent implements OnInit {
  post: Post;
  constructor(public redditApi: RedditApiService ) {}//allows us to use the reddit-api service

  ngOnInit(): void {
    this.redditApi.getResults(); //calls API
  }

}
