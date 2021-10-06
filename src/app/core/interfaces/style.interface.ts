import { DropAreaItem } from "../state/actions/dropAreaActions";
import { FieldConfig } from "./field.interface";

export interface Style {
  width?: string,
  height?: string,
  padding?: string,
  required?: boolean,
  borderWidth?: string,
  borderStyle?: string,
  borderColor?: string,
  borderRadius?: string,
  backgroundColor?: string,
  backgroundText?: string,
  color?: string
}

export const initStyles = (type:string):FieldConfig[] => {
  return [
    {
      type: 'slider',
      id: 'width',
      name: '0',
      label: 'Width',
      max: 600,
      min: 10,
      step: 1,
      tickInterval: 1,
      value: type === 'checkbox' ? 20 : 150,
    },
    {
      type: 'slider',
      id: 'height',
      name: '1',
      label: 'Height',
      max: 100,
      min: 20,
      step: 1,
      tickInterval: 1,
      value: 50,
    },
    {
      type: 'checkbox',
      id: 'required',
      name: '2',
      label: 'Required',
      value: false,
    },
    {
      type: 'input',
      id: 'placeholder',
      name: '3',
      label: 'Placeholder',
      inputType: 'text',
      value: 'Type some text',
    },
    {
      type: 'slider',
      id: 'fontSize',
      name: '4',
      label: 'Font Size',
      max: 25,
      min: 10,
      step: 1,
      tickInterval: 1,
      value: 14,
    },
    {
      type: 'slider',
      id: 'fontWeight',
      name: '5',
      label: 'Font Weight',
      max: 900,
      min: 100,
      step: 100,
      tickInterval: 100,
      value: 14,
    },
    {
      type: 'input',
      id: 'borderStyle',
      name: '6',
      label: 'Border Style',
      inputType: 'text',
      value: 'none',
    },
    {
      type: 'input',
      id: 'color',
      name: '7',
      label: 'Text Color',
      inputType: 'color',
      value: '#000',
    },
  ]
}
