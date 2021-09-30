import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { AuthBody } from '../interfaces/auth-body.interface';


@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})

export class AuthorizationComponent implements OnInit{

  public headerTitle:string = 'Sign in'
  public form:FormGroup

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  ngOnInit() {
   this.initForm();
  }

  public onSubmit = (event: Event):void => {
    event.preventDefault();
    const body:AuthBody = this.form.value
    this.authService.login(body)
  }

  private initForm():void {
    this.form = new FormGroup({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    })
  }

}
