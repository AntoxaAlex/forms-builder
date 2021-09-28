import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FieldConfig} from "../../../interfaces/field.interface";
import {FormGroup} from "@angular/forms";
import {SubclassComponent} from "../../subcomponents/subclass.component";


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
  styles: [
    `
      .style-item{
        padding: 10px;
        box-sizing: border-box;
      }
    `
  ]
})
export class InputComponent extends SubclassComponent{
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

  changeForm(evt:any){
    this.formChanged.emit({index:this.index,evt})
  }

  selectField(){
    this.fieldSelected.emit()
  }
}
