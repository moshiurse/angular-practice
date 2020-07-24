import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post(
        'https://angular-demo-ef3ee.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts(){
    this.http.get('https://angular-demo-ef3ee.firebaseio.com/posts.json')
    .pipe(map(responseData => {
      const postArray = [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postArray.push({...responseData[key], id: key});
        }
      }
      return postArray;
    })
    )
    .subscribe(posts => {
      console.log(posts);
    })
  }
}
