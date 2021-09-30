import { Component, EventEmitter, Output } from '@angular/core';
import {MatCheckboxChange} from "@angular/material/checkbox";
import { FormGroup } from '@angular/forms';

import { FieldConfig } from '../../../../core/interfaces/field.interface';
import { SubclassComponent } from '../../../../core/interfaces/subclass.component';


@Component({
  selector: 'app-checkbox',
  templateUrl:'./checkbox.component.html'
})

export class CheckboxComponent extends SubclassComponent{

  public field: FieldConfig;
  public group: FormGroup;
  public index:number;
  public styles:FieldConfig[]
  public isStyleInput:boolean
  public isFormActive:boolean

  @Output('formChanged') public formChanged = new EventEmitter()
  @Output('fieldSelected') public fieldSelected = new EventEmitter()

  constructor() {
    super()
  }

  public changeForm(evt:MatCheckboxChange):void{
    this.formChanged.emit({ index:this.index, evt })
  }

  public selectField():void{
    this.fieldSelected.emit()
  }

}
