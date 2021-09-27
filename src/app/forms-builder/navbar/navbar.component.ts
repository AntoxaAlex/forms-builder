import {Component, OnInit, Output} from '@angular/core';
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output("userLoggedOut") userLoggedOut = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  logout(){
    this.userLoggedOut.emit()
  }
}
