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

  allowNewServer = false;
  serverCreationStatus = 'No Server Created';
  serverName = '';
  serverCreated = false;
  servers = ['myserver1', 'myserver2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000)
   }

  ngOnInit(): void {
  }

  onCreateServer (){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server Created, Name is: ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
