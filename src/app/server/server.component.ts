import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})


export class ServerComponent implements OnInit {
    allowButtonClick = false;
    constructor() {
        setTimeout(() => {
            this.allowButtonClick = true;
        }, 5000);
    }
    ngOnInit() {

    }
}
