import {Action} from "@ngrx/store";

export enum dragAreaActions {
  "startDragging"="[DragArea] startDragging",
  "enterToDropArea"="[DragArea] enterToDropArea",
}


export class DragAreaStartDraggingAction implements Action{
  readonly type = dragAreaActions.startDragging
  constructor(public payload:boolean) {
  }
}

export class DragAreaEnterToDropAreaAction implements Action{
  readonly type = dragAreaActions.enterToDropArea
  constructor(public payload:boolean) {
  }
}


export type DragAreaActions = |DragAreaEnterToDropAreaAction|DragAreaStartDraggingAction
