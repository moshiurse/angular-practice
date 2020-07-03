import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers', //one way
  // selector: '[app-servers]', //another way as attribute 
  selector: '.app-servers', // selector as class
  // template: '<app-server></app-server><app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
