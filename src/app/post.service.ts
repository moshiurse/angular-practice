import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "./post.model";
import { map, catchError } from "rxjs/operators";
import { Subject, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PostService {

    error = new Subject<string>();

    constructor(private http: HttpClient){}

    createPost(title: string, content: string){
        const postData = {title: title, content: content};
        this.http
        .post<{name: string}>(
          'https://angular-demo-ef3ee.firebaseio.com/posts.json',
          postData
        )
        .subscribe(responseData => {
          console.log(responseData);
        }, error => {
            this.error = error.message;
        });
    }

    fetchPost(){
        return this.http.get<{[key: string]: Post}>('https://angular-demo-ef3ee.firebaseio.com/posts.json')
        .pipe(map(responseData => {
          const postArray: Post[] = [];
          for(const key in responseData){
            if(responseData.hasOwnProperty(key)){
              postArray.push({...responseData[key], id: key});
            }
          }
          return postArray;
        }),
        catchError(errorRes => {
            return throwError(errorRes);
        })
        );
    }

    deletePosts(){
        return this.http.delete('https://angular-demo-ef3ee.firebaseio.com/posts.json');
    }


}