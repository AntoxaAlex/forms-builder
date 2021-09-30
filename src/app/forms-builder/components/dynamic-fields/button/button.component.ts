import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldConfig } from '../../../../core/interfaces/field.interface';
import { SubclassComponent } from '../../../../core/interfaces/subclass.component';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})

export class ButtonComponent extends SubclassComponent{

  public field: FieldConfig;
  public group: FormGroup;
  public index:number
  public styles:FieldConfig[]
  public isStyleInput:boolean

  @Output('formChanged') public formChanged = new EventEmitter()
  @Output('fieldSelected') public fieldSelected = new EventEmitter()

  constructor() {
    super()
  }

  public changeForm(evt:Event):void{
    this.formChanged.emit({ index:this.index, evt })
  }

  public selectField():void{
    this.fieldSelected.emit()
  }

}