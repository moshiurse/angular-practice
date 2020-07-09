import { 
  Component, 
  OnInit, 
  Input, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ContentChild,
  ElementRef} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit, 
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  // element: {type: string, name: string, content: string}
  @Input('srvElement') element: {type: string, name: string, content: string}

  @ContentChild('contentRef') contentRef: ElementRef;

  constructor() {
    console.log('constructor');
   }

   ngOnChanges(){
    console.log('ngOnChanges');
   }

  ngOnInit(): void {
    console.log('ngOnInit');
    // console.log('Parahraph content ngOnInit: '+ this.contentRef.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log('ngDoCheck');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
    // console.log('Parahraph content ngAfterContentInit: '+ this.contentRef.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

}
