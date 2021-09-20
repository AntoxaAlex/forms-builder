import {Action} from "@ngrx/store";

export interface DragAreaState {
  items:any[],
  loading:boolean,
  loaded:boolean
}

const initialState:DragAreaState = {
  items:[
    "input",
    "textarea",
    "button",
    "checkbox",
    "select"
  ],
  loading:false,
  loaded:false
}


export const dragAreaReducer = (state:DragAreaState = initialState,action:Action) => {
  const{type}=action
  switch (type) {

  }
  return state
}
