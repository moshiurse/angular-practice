import { Component, OnInit, OnDestroy } from '@angular/core';

import { interval, Subscription, Observable } from "rxjs";

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
        if(count === 1){
          observer.complete();
        }
        if(count > 1){
          observer.error(new Error('Count is grater than 1'));
          
        }
        count++;
      }, 1000)
    });

    this.firstObservable = custObservable.subscribe(count => {
      console.log(count);
    }, error => alert(error.message), () => {
      alert('Observer completed!');
    })
  }

  ngOnDestroy(){
    this.firstObservable.unsubscribe();
  }

}
