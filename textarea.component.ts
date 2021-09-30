import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FieldConfig} from "../../../interfaces/field.interface";
import {FormGroup} from "@angular/forms";
import {SubclassComponent} from "../../subcomponents/subclass.component";

@Component({
  selector: 'app-textarea',
  template: `
    <mat-form-field
      class="example-full-width"
      appearance="fill"
      [formGroup]="group"
      [style]="styles|stylePipe:['width','fontSize','fontWeight','borderStyle']:false:isStyleInput"
    >
      <mat-label>{{styles|stylePipe:['placeholder']:false:isStyleInput:field.label}}</mat-label>
      <textarea
        matInput
        [formControlName]="field.name!"
        [id]="field.id"
        [required]="styles|stylePipe:['required']:false:isStyleInput:false"
        [style]="styles|stylePipe:['color','height']:false:isStyleInput"
        (click)="selectField()"
      >{{field.value}}</textarea>
    </mat-form-field>
  `,
  styles: [
  ]
})
export class TextareaComponent extends SubclassComponent{

  field: FieldConfig;
  group: FormGroup;
  index:number
  styles:any
  isStyleInput:boolean

  @Output("fieldSelected") fieldSelected = new EventEmitter()

  constructor() {
    super()
  }

  selectField(){
    this.fieldSelected.emit()
  }
}
