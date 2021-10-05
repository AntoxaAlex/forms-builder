import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldConfig } from '../../../../core/interfaces/field.interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: [],
})
export class SliderComponent {
  public field: FieldConfig;
  public group: FormGroup;
  public index: number;
  public styles: FieldConfig[];
  public isStyleInput: boolean;
  public isFormActive: boolean;

  @Output('fieldSelected') public fieldSelected = new EventEmitter();

  constructor() {}

  public selectField(): void {
    this.fieldSelected.emit();
  }
}
