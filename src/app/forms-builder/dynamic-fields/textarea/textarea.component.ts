import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldConfig } from '../../../interfaces/field.interface';
import { SubclassComponent } from '../../subcomponents/subclass.component';

@Component({
  selector: 'app-textarea',
  templateUrl:'./textarea.component.html',
  styleUrls: ['../dynamic-fields.component.scss']
})

export class TextareaComponent extends SubclassComponent{

  public field: FieldConfig;
  public group: FormGroup;
  public index:number
  public styles:FieldConfig[]
  public isStyleInput:boolean

  @Output('fieldSelected') public fieldSelected = new EventEmitter()

  constructor() {
    super()
  }

  public selectField():void{
    this.fieldSelected.emit()
  }

}
