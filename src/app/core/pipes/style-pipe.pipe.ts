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
      const cssNumProperties = ['height', 'padding', 'fontSize', 'borderWidth', 'borderRadius']
      const cssTextProperties = ['placeholder', 'backgroundText', 'required']
      if (newObj.hasOwnProperty(name)) {
        if (name === 'width') {
          newObj = { ...newObj, width: isFormActive ? value + '%' : value + 'px' };
        } else if (cssNumProperties.indexOf(name) > -1) {
          newObj = { ...newObj, [name]: value + 'px' };
        } else if (cssTextProperties.indexOf(name) > -1) {
          newObj = value;
        } else {
          newObj = { ...newObj, [name!]: value };
        }
      }
    });
    return newObj;
  }
}
