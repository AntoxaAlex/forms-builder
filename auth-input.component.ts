import {Component, forwardRef, Input, OnInit} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-auth-input',
  template:
      `
    <mat-form-field class="full-width" appearance="fill">
      <mat-label>{{type==='email'?'Email':'Password'}}</mat-label>
      <input [type]="type" matInput [placeholder]="type==='email'?'username@gmail.com':''" required="true" [(ngModel)]="value">
    </mat-form-field>
  `,
  styles: [
    `
      .full-width{
        width: 100%;
      }
    `
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthInputComponent),
      multi: true
    }
  ]
})
export class AuthInputComponent implements ControlValueAccessor {

  @Input() type:string

  constructor() { }

  onChange: any = () => {}
  onTouch: any = () => {}
  val= "" // this is the updated value that the class accesses
  set value(val:string){  // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
    this.val = val
    this.onChange(val)
    this.onTouch(val)
  }
  // this method sets the value programmatically
  writeValue(value: any){
    this.value = value
  }
  // upon UI element value changes, this method gets triggered
  registerOnChange(fn: any){
    this.onChange = fn
  }
  // upon touching the element, this method gets triggered
  registerOnTouched(fn: any){
    this.onTouch = fn
  }
}
