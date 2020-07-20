import { Component, OnInit, OnDestroy } from '@angular/core';

import { interval, Subscription, Observable } from "rxjs";
import { map, filter } from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObservable: Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstObservable = interval(1000).subscribe(count => {
    //   console.log(count);
    // })
    const custObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if(count === 4){
          observer.complete();
        }
        if(count > 5){
          observer.error(new Error('Count is grater than 1'));
          
        }
        count++;
      }, 1000)
    });

    this.firstObservable = custObservable.pipe(filter( data => {
      return data > 0;
    }),map((data: number) => {
      return 'Round '+ (data);
    })).subscribe(count => {
      console.log(count);
    }, error => alert(error.message), () => {
      alert('Observer completed!');
    })
  }

  ngOnDestroy(){
    this.firstObservable.unsubscribe();
  }

}
