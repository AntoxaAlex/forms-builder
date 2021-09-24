import {Action} from "@ngrx/store";
import {AccordionActions} from "../actions/accordionActions";
import {accordionActions} from "../actions/accordionActions";
import {dropAreaActions} from "../actions/dropAreaActions";
import {FieldConfig} from "../../../interfaces/field.interface";

export interface AccordionState {
  isFormStylingActive:boolean,
  formStyling:FieldConfig[],
  fieldStyling:FieldConfig[],
  loading:boolean,
  loaded:boolean
}

const initialState:AccordionState = {
  isFormStylingActive:true,
  formStyling:[
    {
      type:"slider",
      id:"width",
      name:"width",
      label:"Width",
      max:100,
      min:10,
      step:1,
      tickInterval:1,
      value:100
    },
    {
      type:"slider",
      id:"height",
      name:"height",
      label:"Height",
      max:800,
      min:100,
      step:1,
      tickInterval:1,
      value:600
    },
    {
      type:"slider",
      id:"padding",
      name:"padding",
      label:"Padding",
      max:100,
      min:0,
      step:1,
      tickInterval:1,
      value:20
    },
    {
      type:"input",
      id:"backgroundText",
      name:"backgroundText",
      label:"Background Text",
      inputType:"text",
      value:"Drop something here"
    },
    {
      type:"input",
      id:"backgroundColor",
      name:"backgroundColor",
      label:"Background Color",
      inputType:"color",
      value:"#fff"
    },
    {
      type:"slider",
      id:"borderWidth",
      name:"borderWidth",
      label:"Border Width",
      max:10,
      min:1,
      step:1,
      tickInterval:1,
      value:1
    },
    {
      type:"input",
      id:"borderStyle",
      name:"borderStyle",
      label:"Border Style",
      inputType:"text",
      value:"solid"
    },
    {
      type:"input",
      id:"borderColor",
      name:"borderColor",
      label:"Border Color",
      inputType:"color",
      value:"#000"
    },
    {
      type:"slider",
      id:"borderRadius",
      name:"borderRadius",
      label:"Border Radius",
      max:50,
      min:0,
      step:1,
      tickInterval:1,
      value:15
    }
  ],
  fieldStyling:[
    {
      type:"slider",
      id:"width",
      name:"width",
      label:"Width",
      max:600,
      min:10,
      step:1,
      tickInterval:1,
      value:150
    },
    {
      type:"slider",
      id:"height",
      name:"height",
      label:"Height",
      max:100,
      min:20,
      step:1,
      tickInterval:1,
      value:50
    },
    {
      type:"checkbox",
      id:"required",
      name:"required",
      label:"Required",
      checked:false
    },
    {
      type:"input",
      id:"placeholder",
      name:"placeholder",
      label:"Placeholder",
      inputType:"text",
      value:"Type some text"
    },
    {
      type:"slider",
      id:"fontSize",
      name:"fontSize",
      label:"Font Size",
      max:25,
      min:10,
      step:1,
      tickInterval:1,
      value:14
    },
    {
      type:"slider",
      id:"fontWeight",
      name:"fontWeight",
      label:"Font Weight",
      max:900,
      min:100,
      step:100,
      tickInterval:100,
      value:14
    },
    {
      type:"input",
      id:"borderStyle",
      name:"borderStyle",
      label:"Border Style",
      inputType:"text",
      value:"solid"
    },
    {
      type:"input",
      id:"color",
      name:"color",
      label:"Text Color",
      inputType:"color",
      value:"#000"
    }
  ],
  loading:false,
  loaded:false
}

export const accordionReducer = (state:AccordionState = initialState,action:AccordionActions) => {
  switch (action.type) {
    case accordionActions.changeStyling:
    return {
      ...state,
      isFormStylingActive:action.payload
    }
    case accordionActions.changeForm: {
      const payload = action.payload
      const newFormStyling = [...state.formStyling]
      newFormStyling[payload.index] = {...newFormStyling[payload.index],value:payload.value}
      return {
        ...state,
        formStyling:newFormStyling
      }
    }
    default:
      return state
  }
}
