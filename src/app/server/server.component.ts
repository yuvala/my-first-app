import { Component, OnInit } from '@angular/core';
import { SSL_OP_SINGLE_DH_USE } from 'constants';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .serverFrame {
                   border:1px red solid;
                   margin:10px;
                   padding:10px;
            }
            .btn-section {
                display:flex;
            }
            .btn-section div {
                margin:10px;
            }
    `]
})


export class ServerComponent implements OnInit {
    allowButtonClick = false;
    serverCreationStatus = 'No server was created!';
    serverName = 'walla';
    constructor() {
        setTimeout(() => {
            this.allowButtonClick = true;
        }, 5000);
    }
    ngOnInit () {

    }
    onServerCreated () {
        this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    }
    onServerNameUpdated (event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
        console.log(event);
    }
}
