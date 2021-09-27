import {Action} from "@ngrx/store";
import {AccordionActions} from "../actions/accordionActions";
import {accordionActions} from "../actions/accordionActions";
import {dropAreaActions} from "../actions/dropAreaActions";
import {FieldConfig} from "../../../interfaces/field.interface";

export interface AccordionState {
  isAccordionExpanded:boolean,
  isFormStylingActive:boolean,
  formStyling:FieldConfig[],
  fieldStyling:FieldConfig[],
  loading:boolean,
  loaded:boolean
}

const initialState:AccordionState = {
  isAccordionExpanded:false,
  isFormStylingActive:true,
  formStyling:[
    {
      type:"slider",
      id:"width",
      name:"0",
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
      name:"1",
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
      name:"2",
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
      name:"3",
      label:"Background Text",
      inputType:"text",
      value:"Drop something here"
    },
    {
      type:"input",
      id:"backgroundColor",
      name:"4",
      label:"Background Color",
      inputType:"color",
      value:"#1F2833"
    },
    {
      type:"slider",
      id:"borderWidth",
      name:"5",
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
      name:"6",
      label:"Border Style",
      inputType:"text",
      value:"solid"
    },
    {
      type:"input",
      id:"borderColor",
      name:"7",
      label:"Border Color",
      inputType:"color",
      value:"#000"
    },
    {
      type:"slider",
      id:"borderRadius",
      name:"8",
      label:"Border Radius",
      max:50,
      min:0,
      step:1,
      tickInterval:1,
      value:0
    }
  ],
  fieldStyling:[
    {
      type:"slider",
      id:"width",
      name:"0",
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
      name:"1",
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
      name:"2",
      label:"Required",
      checked:false
    },
    {
      type:"input",
      id:"placeholder",
      name:"3",
      label:"Placeholder",
      inputType:"text",
      value:"Type some text"
    },
    {
      type:"slider",
      id:"fontSize",
      name:"4",
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
      name:"5",
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
      name:"6",
      label:"Border Style",
      inputType:"text",
      value:"solid"
    },
    {
      type:"input",
      id:"color",
      name:"7",
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
    case accordionActions.expandAccordion:
      return {
        ...state,
        isAccordionExpanded: !state.isAccordionExpanded
      }
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
