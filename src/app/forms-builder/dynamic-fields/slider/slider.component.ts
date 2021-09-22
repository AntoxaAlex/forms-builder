import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FieldConfig} from "../../../interfaces/field.interface";
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'app-slider',
  template: `
    <div class="demo-full-width margin-top" [formGroup]="group" >
      <mat-slider
        thumbLabel
        aria-label="units"
        [formControlName]="field.name!"
        [id]="field.id"
        [max]="field.max!"
        [min]="field.min!"
        [step]="field.step"
        [tickInterval]="field.tickInterval!"
        [value]="field.value!"
        (change)="changeForm($event)"
      ></mat-slider>
    </div>
  `,
  styles: [
  ]
})
export class SliderComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  index:number

  @Output("formChanged") formChanged = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  changeForm(evt:any){
    this.formChanged.emit({index:this.index,evt})
  }

}
