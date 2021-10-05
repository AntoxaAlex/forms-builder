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
