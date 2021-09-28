import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'any'
})
export class AuthService {

  constructor(private http:HttpClient,private router:Router) {
  }

  login(body:any){
    this.http.post("http://localhost:5000/auth",body).subscribe((token:any)=>{
      localStorage.setItem("token",token)
      this.router.navigate(['forms-builder'])
    })
  }
}
