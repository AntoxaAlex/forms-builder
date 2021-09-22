import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FieldConfig} from "../../../interfaces/field.interface";
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'app-input',
  template: `
    <mat-form-field class="demo-full-width" [formGroup]="group">
      <input
        matInput
        [formControlName]="field.name!"
        [placeholder]="field.label!"
        [type]="field.inputType!"
        [id]="field.id"
        [value]="field.value!"
        (change)="changeForm($event)"
      >
    </mat-form-field>
  `,
  styles: [
  ]
})
export class InputComponent implements OnInit {
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
