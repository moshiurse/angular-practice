import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {type: 'server', name: 'Test', content: 'Test Content'},
    {type: 'server', name: 'Test2', content: 'Test Content2'}
  ];

}
