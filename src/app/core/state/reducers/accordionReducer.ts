import { AccordionActions } from '../actions/accordionActions';
import { eAccordionActions } from '../actions/accordionActions';
import { FieldConfig } from '../../interfaces/field.interface';

export interface AccordionState {
  isAccordionExpanded: boolean;
  isFormStylingActive: boolean;
  formStyling: FieldConfig[];
  loading: boolean;
  loaded: boolean;
}

const initialState: AccordionState = {
  isAccordionExpanded: false,
  isFormStylingActive: true,
  formStyling: [
    {
      type: 'slider',
      id: 'width',
      name: '0',
      label: 'Width',
      max: 100,
      min: 10,
      step: 1,
      tickInterval: 1,
      value: 100,
    },
    {
      type: 'slider',
      id: 'height',
      name: '1',
      label: 'Height',
      max: 800,
      min: 100,
      step: 1,
      tickInterval: 1,
      value: 600,
    },
    {
      type: 'slider',
      id: 'padding',
      name: '2',
      label: 'Padding',
      max: 100,
      min: 0,
      step: 1,
      tickInterval: 1,
      value: 20,
    },
    {
      type: 'input',
      id: 'backgroundText',
      name: '3',
      label: 'Background Text',
      inputType: 'text',
      value: 'Drop something here',
    },
    {
      type: 'input',
      id: 'backgroundColor',
      name: '4',
      label: 'Background Color',
      inputType: 'color',
      value: '#1F2833',
    },
    {
      type: 'slider',
      id: 'borderWidth',
      name: '5',
      label: 'Border Width',
      max: 10,
      min: 1,
      step: 1,
      tickInterval: 1,
      value: 1,
    },
    {
      type: 'input',
      id: 'borderStyle',
      name: '6',
      label: 'Border Style',
      inputType: 'text',
      value: 'solid',
    },
    {
      type: 'input',
      id: 'borderColor',
      name: '7',
      label: 'Border Color',
      inputType: 'color',
      value: '#000',
    },
    {
      type: 'slider',
      id: 'borderRadius',
      name: '8',
      label: 'Border Radius',
      max: 50,
      min: 0,
      step: 1,
      tickInterval: 1,
      value: 0,
    },
  ],
  loading: false,
  loaded: false,
};

export const accordionReducer = (state: AccordionState = initialState, action: AccordionActions): AccordionState => {
  switch (action.type) {
    case eAccordionActions.expandAccordion:
      return {
        ...state,
        isAccordionExpanded: !state.isAccordionExpanded,
      };

    case eAccordionActions.changeStyling:
      return {
        ...state,
        isFormStylingActive: action.payload,
      };

    case eAccordionActions.changeForm: {
      const payload = action.payload;
      const newFormStyling = [...state.formStyling];
      newFormStyling[payload.index] = {
        ...newFormStyling[payload.index],
        value: payload.value,
      };
      return {
        ...state,
        formStyling: newFormStyling,
      };
    }

    default:
      return state;
  }
};
