import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChildren} from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import {FieldConfig} from "../../interfaces/field.interface";
import {SliderComponent} from "./slider/slider.component";

@Component({
  selector: 'app-dynamic-form',
  template: `
    <form class="accordion-container" [formGroup]="form">
      <ng-container *ngFor="let field of fields;index as index" dynamicField [field]="field" [group]="form" [index]="index" (formChanged)="changeForm($event)">
      </ng-container>
    </form>
  `,
  styles: [
    `
      .accordion-container{
        overflow-x: auto;
        display: flex;
      }
    `
  ]
})
export class DynamicFormComponent implements OnInit,AfterViewInit {

  @Input() fields: FieldConfig[] = [];
  form: FormGroup;
  @Output("formChanged") formChanged = new EventEmitter()

  @ViewChildren(SliderComponent) sliderComponents:any

  get value() {
    return this.form.value;
  }

  constructor(private fb: FormBuilder) {

  }

  createControl() {
    const group = this.fb.group({});
    this.fields.forEach(field => {
      if (field.type === "button") return;
      const control = this.fb.control(
        field.value
      );
      group.addControl(field.name!, control);
    });
    return group;
  }

  ngOnInit(): void {
    this.form = this.createControl();
  }
  ngAfterViewInit() {
  }

  changeForm(evt:any){
    this.formChanged.emit(evt)
  }

}
