import {Component, EventEmitter, OnInit, Output, forwardRef, HostBinding, Input } from '@angular/core';
import {FieldConfig} from "../../../interfaces/field.interface";
import {FormGroup} from "@angular/forms";
import {SubclassComponent} from "../../subcomponents/subclass.component";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-input',
  template: `
    <div [formGroup]="group" [class]="isStyleInput ? 'style-item':''">
      <p *ngIf="isStyleInput">{{field.label}}</p>
      <mat-form-field
        class="demo-full-width"
        [style]="styles|stylePipe:['width','fontSize','fontWeight','borderStyle']:isFormActive:isStyleInput"
      >
        <input
          matInput
          [name]="field.name!"
          [type]="field.inputType!"
          [placeholder]="styles|stylePipe:['placeholder']:isFormActive:isStyleInput:''"
          [required]="styles|stylePipe:['required']:isFormActive:isStyleInput:false"
          [style]="styles|stylePipe:['color','height']:isFormActive:isStyleInput"
          [id]="isFormActive ? field.id : 'field-'+field.type"
          [value]="field.value!"
          (change)="changeForm($event)"
          (click)="selectField()"
        >
      </mat-form-field>
    </div>
  `,
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  styles: [
    `
      .style-item{
        padding: 10px;
        box-sizing: border-box;
      }
    `
  ]
})
export class InputComponent extends SubclassComponent implements ControlValueAccessor{
  field: FieldConfig;
  group: FormGroup;
  index:number
  styles:any
  isStyleInput:boolean
  isFormActive:boolean

  @Output("formChanged") formChanged = new EventEmitter()
  @Output("fieldSelected") fieldSelected = new EventEmitter()
  constructor() {
    super()
  }
  onChange: any = () => {}
  onTouch: any = () => {}
  val= "" // this is the updated value that the class accesses
  set value(val:any){  // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
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

  changeForm(evt:any){
    this.formChanged.emit({index:this.index,evt})
  }

  selectField(){
    this.fieldSelected.emit()
  }
}
