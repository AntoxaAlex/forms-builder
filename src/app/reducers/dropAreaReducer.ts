import {Action} from "@ngrx/store";
import {dropAreaActions} from "../actions/dropAreaActions";


export interface DropAreaState {
  items:any[],
  loading:boolean,
  loaded:boolean
}

const initialState:DropAreaState = {
  items:[],
  loading:false,
  loaded:false
}


export const dropAreaReducer = (state:DropAreaState = initialState,action:Action) => {
  const{type}=action
  // const payload = action.payload
  switch (type) {

  }
  return state
}
