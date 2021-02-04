import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface Result {
  data: {
    children: [
      {
          data: {
            title: string;
            permalink: string;
            thumbnail: string;
          }
      }
    ];
  };
}

@Injectable({
  providedIn: 'root'
})

export class RedditApiService {
  //inject HTTP Client here
  // public results: Result[] = [];??
  public results: Result;


  constructor(private http: HttpClient) {}

  getResults(){
    //make request to API
    //Set the response to this.results array
    const url = 'https://www.reddit.com/r/aww/.json';
    return this.http.get<Result>(url).subscribe((data: Result) => this.results = {...data},// calls API and gettng data from reddit and filling in results
    (error) => {console.error(error);});

    // this.result.push(results);??


    // this.http.get(url).subscribe(
    //   (resp:any) => {
    //     console.log(resp);
    //     const posts = resp.data.children;
    //   },
    //   (error) => {console.error(error);})
  }
}