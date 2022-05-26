import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AccordionState } from '../reducers/accordionReducer';
import { DragAreaState } from '../reducers/dragAreaReducer';
import { DropAreaState } from '../reducers/dropAreaReducer';
import { UserState } from '../reducers/userReducer';

export const selectAccordionFeature = createFeatureSelector<AccordionState>('accordion');
export const selectDragAreaFeature = createFeatureSelector<DragAreaState>('dragArea');
export const selectDropAreaFeature = createFeatureSelector<DropAreaState>('dropArea');
export const selectUserFeature = createFeatureSelector<UserState>('user');

export const selectAccordion = createSelector(selectAccordionFeature, (state): AccordionState => state);
export const selectDragArea = createSelector(selectDragAreaFeature, (state): DragAreaState => state);
export const selectDropArea = createSelector(selectDropAreaFeature, (state): DropAreaState => state);
export const selectUser = createSelector(selectUserFeature, (state): UserState => state);
