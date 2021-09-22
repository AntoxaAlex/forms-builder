import {Action} from "@ngrx/store";

export interface ChangeFormValues {
  index:number
  name:string
  value:any
}


export enum accordionActions{
  changeStyling="[ACCORDION] changeStyling",
  changeForm="[ACCORDION] changeForm"
}

export class AccordionChangeStylingAction implements Action{
  readonly type = accordionActions.changeStyling
}

export class AccordionChangeFormAction implements Action{
  readonly type = accordionActions.changeForm
  constructor(public payload:ChangeFormValues) {}
}

export type AccordionActions = |AccordionChangeFormAction|AccordionChangeStylingAction
