import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationComponent } from './authorization.component';
import {FormsBuilderRoutingModule} from "../forms-builder/forms-builder-routing.module";
import {MaterialModule} from "../material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AuthorizationComponent
  ],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthorizationModule { }
