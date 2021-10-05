<<<<<<< HEAD:src/app/authorization/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from "../core/interfaces/user.interface";

@Injectable({
  providedIn: 'any',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  public login(body: User): void {
    this.http.post<string>('http://localhost:5000/auth', body).subscribe((token: string): void => {
      localStorage.setItem('token', token);
      this.router.navigate(['forms-builder']);
    });
  }
}
=======
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
>>>>>>> 2b441f217a0e0a74d8e2419cdcbeb50a1bcfd267:auth.service.ts
