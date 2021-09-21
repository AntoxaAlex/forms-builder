import {Action} from "@ngrx/store";
import {AccordionActions} from "../actions/accordionActions";
import {accordionActions} from "../actions/accordionActions";
import {dropAreaActions} from "../actions/dropAreaActions";

export interface AccordionState {
  isFormStylingActive:boolean,
  formStyling:{
    width:number,
    height:number,
    padding:number,
    backgroundColor:string,
    backgroundText:string
    borderWidth:number,
    borderStyle:string,
    borderColor:string,
    borderRadius:number
  },
  fieldStyling:{
    width:number,
    height:number,
    placeholder:string,
    required:boolean,
    borderStyle:string,
    fontSize:number,
    fontWeight:number,
    color:string
  },
  loading:boolean,
  loaded:boolean
}

const initialState:AccordionState = {
  isFormStylingActive:true,
  formStyling:{
    width:100,
    height:600,
    padding:20,
    backgroundColor:"#fff",
    backgroundText:"Drop something here",
    borderWidth:1,
    borderStyle:"solid",
    borderColor:"#000",
    borderRadius:15
  },
  fieldStyling:{
    width:150,
    height:50,
    placeholder:"Type some text",
    required:false,
    borderStyle:"solid",
    fontSize:14,
    fontWeight:400,
    color:"#000"
  },
  loading:false,
  loaded:false
}

export const accordionReducer = (state:AccordionState = initialState,action:AccordionActions) => {
  switch (action.type) {
    case accordionActions.changeStyling:
    return {
      ...state,
      isFormStylingActive:!state.isFormStylingActive
    }
    case accordionActions.changeForm: {
      const payload = action.payload
      return {
        ...state,
        formStyling:{
          ...state.formStyling,
          [payload.name]: payload.value
        }
      }
    }
    default:
      return state
  }
}
