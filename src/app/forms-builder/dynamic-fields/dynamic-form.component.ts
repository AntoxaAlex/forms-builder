import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { Store } from '@ngrx/store';

import { FieldConfig } from '../../interfaces/field.interface';
import { FormsBuilderContentState } from '../state/reducers';
import { FormsBuilderService } from '../forms-builder.service';
import { DropAreaChangeIndexAction } from '../state/actions/dropAreaActions';


@Component({
  selector: 'app-dynamic-form',
  templateUrl:'./dynamic-form.component.html',
  styleUrls:[`./dynamic-form.component.scss`]
})

export class DynamicFormComponent implements OnInit,AfterViewInit,AfterViewChecked {

  public form: FormGroup;
  public changeContent$:any

  @Input() public fields: FieldConfig[] = [];
  @Input() public isStyleInput:boolean
  @Input() public isFormActive:boolean
  @Input() public items:any
  @Input() public selectedIndex:any

  @ViewChildren('dynamicInputs') public inputComponents:any
  @ViewChild('dynamicForm') public dynamicForm:any


  get value() {
    return this.form.value;
  }

  constructor(private fb: FormBuilder,private store$:Store<FormsBuilderContentState>,private formsBuilderService:FormsBuilderService) {}

  public createControl(): FormGroup {
    const group = this.fb.group({});
    this.fields.forEach(field => {
      if (field.type === 'button') return;
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
  ngAfterViewChecked() {
   this.changeContent$= fromEvent(this.dynamicForm.nativeElement.children,'change').subscribe((evt:any)=>{
     this.isFormActive
       ? this.formsBuilderService.onChangeDropArea(evt)
       :  this.formsBuilderService.onChangeField({ evt, items:this.items }, this.selectedIndex)
   })
  }

  public selectField(index:number):void{
    this.store$.dispatch(new DropAreaChangeIndexAction(index))
  }

}
