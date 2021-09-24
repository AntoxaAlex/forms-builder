import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FieldConfig} from "../../../interfaces/field.interface";
import {FormGroup} from "@angular/forms";
import {SubclassComponent} from "../../subcomponents/subclass.component";


@Component({
  selector: 'app-slider',
  template: `
    <div class="demo-full-width margin-top" [formGroup]="group" >
      <mat-slider
        thumbLabel
        aria-label="units"
        [formControlName]="field.name!"
        [id]="isFormActive ? field.id : 'field-'+field.type"
        [max]="field.max!"
        [min]="field.min!"
        [step]="field.step"
        [tickInterval]="field.tickInterval!"
        [value]="field.value!"
        (change)="changeForm($event)"
        (click)="selectField()"
      ></mat-slider>
    </div>
  `,
  styles: [
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
