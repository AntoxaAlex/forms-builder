import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FieldConfig} from "../../../interfaces/field.interface";
import {FormGroup} from "@angular/forms";
import {SubclassComponent} from "../../subcomponents/subclass.component";


@Component({
  selector: 'app-slider',
  template: `
    <div class="demo-full-width margin-top" [formGroup]="group" [class]="isStyleInput ? 'style-item':''" >
      <p *ngIf="isStyleInput">{{field.label}}</p>
      <input
        type="range"
        [name]="field.name!"
        [id]="isFormActive ? field.id : 'field-'+field.type"
        [max]="field.max!"
        [min]="field.min!"
        color="primary"
        [step]="field.step"
        [value]="field.value!"
        (change)="isFormActive ? changeForm($event) : changeField($event)"
        (click)="selectField()"
      >

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
export class SliderComponent extends SubclassComponent{
  field: FieldConfig;
  group: FormGroup;
  index:number
  styles:any
  isStyleInput:boolean
  isFormActive:boolean

  @Output("formChanged") formChanged = new EventEmitter()
  @Output("fieldChanged") fieldChanged = new EventEmitter()
  @Output("fieldSelected") fieldSelected = new EventEmitter()

  constructor() {
    super()
  }

  changeForm(evt:any){
    this.formChanged.emit({index:this.index,evt})
  }

  changeField(evt:any){
    this.fieldChanged.emit({index:this.index,evt})
  }


  selectField(){
    this.fieldSelected.emit()
  }
}
