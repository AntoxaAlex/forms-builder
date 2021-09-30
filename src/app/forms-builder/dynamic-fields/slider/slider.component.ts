import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldConfig } from '../../../interfaces/field.interface';
import { SubclassComponent } from '../../subcomponents/subclass.component';


@Component({
  selector: 'app-slider',
  templateUrl:'./slider.component.html',
  styleUrls: ['../dynamic-fields.component.scss']
})

export class SliderComponent extends SubclassComponent{

  public field: FieldConfig;
  public group: FormGroup;
  public index:number
  public styles:FieldConfig[]
  public isStyleInput:boolean
  public isFormActive:boolean

  @Output("formChanged") public formChanged = new EventEmitter()
  @Output("fieldChanged") public fieldChanged = new EventEmitter()
  @Output("fieldSelected") public fieldSelected = new EventEmitter()

  constructor() {
    super()
  }

  public changeForm(evt:Event):void{
    this.formChanged.emit({ index:this.index, evt })
  }

  public changeField(evt:Event):void{
    this.fieldChanged.emit({index:this.index,evt})
  }


  public selectField():void{
    this.fieldSelected.emit()
  }

}
