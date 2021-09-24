import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FieldConfig} from "../../../interfaces/field.interface";
import {FormGroup} from "@angular/forms";
import {SubclassComponent} from "../../subcomponents/subclass.component";


@Component({
  selector: 'app-checkbox',
  template: `
    <div class="demo-full-width margin-top" [formGroup]="group" >
      <mat-checkbox
        [formControlName]="field.name!"
        [id]="isFormActive ? field.id : 'field-'+field.type"
        [style]="styles|stylePipe:['width','height','color','fontSize','fontWeight','borderStyle']:isFormActive:isStyleInput"
        [style]="!isStyleInput ? {
        width:styles.width,
        fontSize:styles.fontSize,
        fontWeight:styles.fontWeight,
        borderStyle:styles.borderStyle,
        color:styles.color,
        height:styles.height
      } : ''"
        [name]="field.name!"
        [checked]="styles|stylePipe:['required']:isFormActive:isStyleInput:false"
        (change)="changeForm($event)"
        (click)="selectField()"
      >{{styles|stylePipe:['placeholder']:isFormActive:isStyleInput:field.label}}</mat-checkbox>
    </div>
  `,
  styles: [
  ]
})
export class CheckboxComponent extends SubclassComponent{
  field: FieldConfig;
  group: FormGroup;
  index:number;
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
