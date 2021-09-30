import { dragAreaActions, DragAreaActions } from '../actions/dragAreaActions';

export interface DragAreaState {
  items:any[],
  isDragging:boolean,
  isDragItemEnter:boolean,
  loading:boolean,
  loaded:boolean
}

const initialState:DragAreaState = {
  items:[
    'input',
    'textarea',
    'button',
    'checkbox',
    'select'
  ],
  isDragging:false,
  isDragItemEnter:false,
  loading:false,
  loaded:false
}


export const dragAreaReducer = (state: DragAreaState = initialState, action: DragAreaActions): DragAreaState => {

  switch (action.type) {

    case dragAreaActions.enterToDropArea:
      return {
        ...state,
        isDragItemEnter:action.payload
      }

    case dragAreaActions.startDragging:
      return {
        ...state,
        isDragging:action.payload
      }

    default:
      return state
  }

}
