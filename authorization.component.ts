import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  headerTitle:string = "Sign in"

  email:string = ""
  password:string = ""


  constructor(private http:HttpClient,private router:Router,private authService:AuthService) { }

  ngOnInit(): void {

  }

  onSubmit = (event:Event) => {
    console.log("submit")
    event.preventDefault();
    const body = {email:this.email,password:this.password}
    this.authService.login(body)
  }

}
