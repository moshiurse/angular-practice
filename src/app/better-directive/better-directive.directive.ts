import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit(){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

}
