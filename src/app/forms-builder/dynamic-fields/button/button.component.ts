import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FieldConfig} from "../../../interfaces/field.interface";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-button',
  template: `
    <div class="demo-full-width margin-top" [formGroup]="group">
      <button
        [id]="field.id"
        type="button"
        mat-raised-button
        color="primary"
        (change)="changeForm($event)"
      >{{field.label}}</button>
    </div>
  `,
  styles: [
  ]
})
export class ButtonComponent implements OnInit {
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
