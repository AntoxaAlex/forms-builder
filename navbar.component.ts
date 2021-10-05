import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild("logoutBtn") logoutBtn:any

  constructor() { }

  ngOnInit(): void {
  }

}
