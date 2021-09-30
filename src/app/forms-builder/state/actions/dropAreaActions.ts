import { Action } from '@ngrx/store';

import { FieldConfig } from '../../../interfaces/field.interface';


export interface DropAreaItem {
  type:string,
  index:string,
  id:string,
  x:number,
  y:number,
  styles:FieldConfig[]
}

export enum dropAreaActions {
  'addItem'='[DropArea] addItem',
  'addItemToServer'='[DropArea] addItemToServer',
  'editItem'='[DropArea] editItem',
  'changeIndex'='[DropArea] changeIndex'
}

export class DropAreaAddItemToServerAction implements Action{
  readonly type = dropAreaActions.addItemToServer
  constructor(public payload: DropAreaItem) {
  }
}

export class DropAreaAddItemAction implements Action{
  readonly type = dropAreaActions.addItem
  constructor(public payload: DropAreaItem) {
  }
}

export class DropAreaEditItemAction implements Action{
  readonly type = dropAreaActions.editItem
  constructor(public payload: DropAreaItem[]) {
  }
}

export class DropAreaChangeIndexAction implements Action{
  readonly type = dropAreaActions.changeIndex
  constructor(public payload: number) {
  }
}

export type DropAreaActions = | DropAreaAddItemAction| DropAreaAddItemToServerAction|DropAreaEditItemAction|DropAreaChangeIndexAction
