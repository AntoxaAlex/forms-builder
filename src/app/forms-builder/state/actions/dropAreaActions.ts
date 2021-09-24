import {Action} from "@ngrx/store";
import {FieldConfig} from "../../../interfaces/field.interface";

export interface DropAreaItem {
  type:string,
  id:string,
  x:number,
  y:number,
  styles:FieldConfig[]
}

export enum dropAreaActions {
  "addItem"="[DropArea] addItem",
  "editItem"="[DropArea] editItem"
}

export class DropAreaAddItemAction implements Action{
  readonly type = dropAreaActions.addItem
  constructor(public payload:DropAreaItem) {
  }
}
export class DropAreaEditItemAction implements Action{
  readonly type = dropAreaActions.editItem
  constructor(public payload:DropAreaItem[]) {
  }
}

export type DropAreaActions = | DropAreaAddItemAction|DropAreaEditItemAction
