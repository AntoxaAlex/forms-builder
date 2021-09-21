import {DropAreaActions, dropAreaActions,DropAreaItem} from "../actions/dropAreaActions";


export interface DropAreaState {
  items:DropAreaItem[]| any[],
  loading:boolean,
  loaded:boolean
}

const initialState:DropAreaState = {
  items:[],
  loading:false,
  loaded:false
}


export const dropAreaReducer = (state:DropAreaState = initialState,action:DropAreaActions) => {
  switch (action.type) {
    case dropAreaActions.addItem:
      return {
        ...state,
        items:[
          ...state.items,
          action.payload
        ]
      }
    case dropAreaActions.editItem:
      const payloadEdit = action.payload;
      return {
        ...state,
        items: payloadEdit
      }

    default:
      return state
  }
}
