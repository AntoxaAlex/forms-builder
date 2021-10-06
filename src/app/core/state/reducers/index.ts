import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../../../environments/environment';
import { AccordionState, accordionReducer } from './accordionReducer';
import { DragAreaState, dragAreaReducer } from './dragAreaReducer';
import { DropAreaState, dropAreaReducer } from './dropAreaReducer';
import { UserState, userReducer } from './userReducer';

export type FormsBuilderContentState = AccordionState | DragAreaState | DropAreaState;

export interface State {
  accordion: AccordionState;
  dragArea: DragAreaState;
  dropArea: DropAreaState;
  user: UserState;
}

export const reducers: ActionReducerMap<State, any> = {
  accordion: accordionReducer,
  dragArea: dragAreaReducer,
  dropArea: dropAreaReducer,
  user: userReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
