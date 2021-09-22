import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FieldConfig} from "../../../interfaces/field.interface";
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'app-select',
  template: `
    <mat-form-field class="demo-full-width margin-top" [formGroup]="group">
      <mat-select [placeholder]="field.label!" [formControlName]="field.name!" [id]="field.id" (change)="changeForm($event)">
        <mat-option>Option 1</mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styles: [
  ]
})
export class SelectComponent implements OnInit {
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
