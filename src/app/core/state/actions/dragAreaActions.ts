import { Action } from '@ngrx/store';

export enum eDragAreaActions {
  startDragging = '[DragArea] startDragging',
  enterToDropArea = '[DragArea] enterToDropArea',
}

export class DragAreaStartDraggingAction implements Action {
  readonly type = eDragAreaActions.startDragging;
  constructor(public payload: boolean) {}
}

export class DragAreaEnterToDropAreaAction implements Action {
  readonly type = eDragAreaActions.enterToDropArea;
  constructor(public payload: boolean) {}
}

export type DragAreaActions = DragAreaEnterToDropAreaAction | DragAreaStartDraggingAction;
