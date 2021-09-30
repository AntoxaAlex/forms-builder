import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FieldConfig} from "../../../interfaces/field.interface";
import {FormGroup} from "@angular/forms";
import {SubclassComponent} from "../../subcomponents/subclass.component";

@Component({
  selector: 'app-button',
  template: `
    <div class="demo-full-width margin-top" [formGroup]="group">
      <button
        [id]="field.id"
        type="button"
        mat-raised-button
        [style]="styles|stylePipe:['width','fontSize','fontWeight','borderStyle','color','height']:false:isStyleInput"
        (change)="changeForm($event)"
        (click)="selectField()"
      >{{styles|stylePipe:['placeholder']:false:isStyleInput}}</button>
    </div>
  `,
  styles: [
  ]
})
export class ButtonComponent extends SubclassComponent{
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
