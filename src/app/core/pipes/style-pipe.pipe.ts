import { Pipe, PipeTransform } from '@angular/core';

import { FieldConfig } from '../interfaces/field.interface';
import { Style } from "../interfaces/style.interface";

@Pipe({
  name: 'stylePipe',
})
export class StylePipePipe implements PipeTransform {
  transform(
    stylesArray: FieldConfig[],
    returnedValues: string[],
    isFormActive: boolean,
    isStyleInput: boolean = false,
    optionValue: any = null,
  ): any {
    if (isStyleInput) return optionValue;
    let newObj: Style = {};
    returnedValues.forEach(entryName => {
      newObj = { ...newObj, [entryName]: null };
    });
    stylesArray.forEach(styleElement => {
      const { id, value } = styleElement;
      const name = id;
      if (newObj.hasOwnProperty(name)) {
        if (name === 'width') {
          console.log('Is active:' + isFormActive);
          newObj = { ...newObj, width: isFormActive ? value + '%' : value + 'px' };
        } else if (
          name === 'height' ||
          name === 'padding' ||
          name === 'fontSize' ||
          name === 'borderWidth' ||
          name === 'borderRadius'
        ) {
          newObj = { ...newObj, [name]: value + 'px' };
        } else if (name === 'placeholder' || name === 'backgroundText' || name === 'required') {
          newObj = value;
        } else {
          newObj = { ...newObj, [name!]: value };
        }
      }
    });
    return newObj;
  }
}
