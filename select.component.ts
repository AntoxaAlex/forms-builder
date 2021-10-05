import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FieldConfig} from "../../../interfaces/field.interface";
import {FormGroup} from "@angular/forms";
import {SubclassComponent} from "../../subcomponents/subclass.component";


@Component({
  selector: 'app-select',
  template: `
    <mat-form-field
      class="demo-full-width margin-top"
      [formGroup]="group"
      [style]="styles|stylePipe:['width','fontSize','fontWeight','borderStyle','height']:false:isStyleInput"
    >
      <mat-select
        [placeholder]="styles|stylePipe:['placeholder']:false:isStyleInput:field.label"
        [formControlName]="field.name!"
        [id]="field.id"
        [required]="styles|stylePipe:['required']:false:isStyleInput:false"
        (change)="changeForm($event)"
        (click)="selectField()"
        [style]="styles|stylePipe:['color','height']:false:isStyleInput"
      >
        <mat-option
          id="field-option"
          [style]="styles|stylePipe:['color','height']:false:isStyleInput"
        >{{styles|stylePipe:['placeholder']:false:isStyleInput:"option"}}</mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styles: [
  ]
})
export class SelectComponent extends SubclassComponent{
  field: FieldConfig;
  group: FormGroup;
  index:number
  styles:any
  isStyleInput:boolean

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
