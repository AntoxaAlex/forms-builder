import {Component, forwardRef, Input} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-auth-input',
  templateUrl:'./auth-input.component.html',
  styleUrls:['./auth-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthInputComponent),
      multi: true
    }
  ]
})

export class AuthInputComponent implements ControlValueAccessor {

  @Input() public type:string

  constructor() { }

  public onChange: any = () => {}
  public onTouch: any = () => {}
  public val= "" // this is the updated value that the class accesses
  set value(val:string){  // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
    this.val = val
    this.onChange(val)
    this.onTouch(val)
  }
  // this method sets the value programmatically
  public writeValue(value: any):void{
    this.value = value
  }
  // upon UI element value changes, this method gets triggered
  public registerOnChange(fn: any):void{
    this.onChange = fn
  }
  // upon touching the element, this method gets triggered
  public registerOnTouched(fn: any):void{
    this.onTouch = fn
  }
}
