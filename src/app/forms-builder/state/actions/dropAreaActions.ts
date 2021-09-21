import {Action} from "@ngrx/store";

export interface DropAreaItem {
  id:string,
  x:number,
  y:number,
  styles:{
    placeholder:string,
    width:number,
    height:number,
    required:boolean,
    borderStyle:"solid"|"dashed"|"dotted"|"double"|"groove"|"ridge"|"inset"|"outset"|"none"|"hidden"
    fontSize:number,
    fontWeight:number,
    color:string
  }
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
