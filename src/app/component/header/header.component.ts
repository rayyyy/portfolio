import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  navStatus = false;

  constructor() { }

  ngOnInit() { }

  navClick() {
    this.navStatus = !this.navStatus;
  }

}
