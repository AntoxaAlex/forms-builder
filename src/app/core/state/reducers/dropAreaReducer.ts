import { DropAreaActions, eDropAreaActions, DropAreaItem } from '../actions/dropAreaActions';

export interface DropAreaState {
  items: DropAreaItem[];
  selectedIndex: number | null;
  loading: boolean;
  loaded: boolean;
}

const initialState: DropAreaState = {
  items: [],
  selectedIndex: null,
  loading: false,
  loaded: false,
};

export const dropAreaReducer = (state: DropAreaState = initialState, action: DropAreaActions): DropAreaState => {
  switch (action.type) {
    case eDropAreaActions.addItem:
      const newItems = [...state.items];
      newItems.push(action.payload);
      return {
        ...state,
        items: newItems,
      };

    case eDropAreaActions.editItem:
      return {
        ...state,
        items:  action.payload,
      };

    case eDropAreaActions.changeIndex:
      return {
        ...state,
        selectedIndex:  action.payload,
      };

    default:
      return state;
  }
};
