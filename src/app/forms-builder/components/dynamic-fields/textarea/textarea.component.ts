import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldConfig } from '../../../../core/interfaces/field.interface';
import { SubclassComponent } from '../../../../core/interfaces/subclass.component';

@Component({
  selector: 'app-textarea',
  templateUrl:'./textarea.component.html'
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
