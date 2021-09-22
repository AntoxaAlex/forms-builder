import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FieldConfig} from "../../../interfaces/field.interface";
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'app-checkbox',
  template: `
    <div class="demo-full-width margin-top" [formGroup]="group" >
      <mat-checkbox
        [formControlName]="field.name!"
        [id]="field.id"
        [name]="field.name!"
        [checked]="field.checked!"
        (change)="changeForm($event)"
      >{{field.label}}</mat-checkbox>
    </div>
  `,
  styles: [
  ]
})
export class CheckboxComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  index:number;

  @Output("formChanged") formChanged = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  changeForm(evt:any){
    this.formChanged.emit({index:this.index,evt})
  }

}
