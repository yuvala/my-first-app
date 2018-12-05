import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowButtonClick = false;
    serverCreationStatus = 'No server was created!';
    serverName = 'walla';
    serverCreated = false;
    server = ['test server', 'test server 2'];
    constructor() {
        setTimeout(() => {
            this.allowButtonClick = true;
        }, 5000);
    }
  ngOnInit() {
  }

}
