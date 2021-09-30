import {createSelector,createFeatureSelector} from "@ngrx/store";
import {AccordionState} from "../reducers/accordionReducer";
import {DragAreaState} from "../reducers/dragAreaReducer";
import {DropAreaState} from "../reducers/dropAreaReducer";

export const selectAccordionFeature = createFeatureSelector<AccordionState>("accordion")
export const selectDragAreaFeature = createFeatureSelector<DragAreaState>("dragArea")
export const selectDropAreaFeature = createFeatureSelector<DropAreaState>("dropArea")

export const selectAccordion = createSelector(selectAccordionFeature,(state):AccordionState=>state)
export const selectDragArea = createSelector(selectDragAreaFeature,(state):DragAreaState=>state)
export const selectDropArea = createSelector(selectDropAreaFeature,(state):DropAreaState=>state)
