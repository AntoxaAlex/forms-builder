import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthBody } from '../interfaces/auth-body.interface';

@Injectable({
  providedIn: 'any'
})

export class AuthService {

  constructor(private http: HttpClient, private router: Router) {}

  public login(body: AuthBody):void{
    this.http.post('http://localhost:5000/auth',body).subscribe((token: any):void=>{
      localStorage.setItem('token',token)
      this.router.navigate(['forms-builder'])
    })
  }

}
