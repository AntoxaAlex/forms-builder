import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationComponent } from './authorization.component';
import {FormsBuilderRoutingModule} from "../forms-builder/forms-builder-routing.module";
import {MaterialModule} from "../material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HeaderInterceptor} from "./header.interceptor";
import {SharedInputsModule} from "../shared-inputs/shared-inputs.module";


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
    ReactiveFormsModule,
    SharedInputsModule
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }]
})
export class AuthorizationModule { }
