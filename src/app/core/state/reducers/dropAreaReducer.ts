import { DropAreaActions, eDropAreaActions, DropAreaItem } from '../actions/dropAreaActions';


export interface DropAreaState {
  items:DropAreaItem[]| any[],
  selectedIndex:number|null,
  loading:boolean,
  loaded:boolean
}

const initialState:DropAreaState = {
  items:[],
  selectedIndex:null,
  loading:false,
  loaded:false
}


export const dropAreaReducer = (state: DropAreaState = initialState, action: DropAreaActions): DropAreaState => {

  switch (action.type) {

    case eDropAreaActions.addItem:
      const newItems = [ ...state.items ]
      newItems.push(action.payload)
      return {
        ...state,
        items:newItems
      }

    case eDropAreaActions.editItem:
      const payloadEdit = action.payload;
      return {
        ...state,
        items: payloadEdit
      }

    case eDropAreaActions.changeIndex:
      const payloadChange = action.payload;
      return {
        ...state,
        selectedIndex:payloadChange
      }

    default:
      return state
  }

}
