import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-name-section',
  templateUrl: './user-name-section.component.html',
  styleUrls: ['./user-name-section.component.css']
})
export class UserNameSectionComponent implements OnInit {
  userName = 'dd';
  constructor() { }

  ngOnInit() {
  }
  onBtnClcked () {
    this.userName = '';
    console.log(this.userName + ' clicked!!!!');
  }

}
