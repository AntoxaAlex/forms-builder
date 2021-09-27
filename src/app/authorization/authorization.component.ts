import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  headerTitle:string = "Sign in"

  email:string
  password:string


  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {

  }

  onSubmit = (event:Event) => {
    event.preventDefault();
    const body = {email:this.email,password:this.password}
    const config = {
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    }
    this.http.post("http://localhost:5000/",body,config).subscribe((token:any)=>{
      localStorage.setItem("token",token)
      this.router.navigate(['forms-builder'])
    })
  }

}
