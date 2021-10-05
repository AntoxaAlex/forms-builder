import {Action} from "@ngrx/store";

export interface ChangeFormValues {
  index:number
  name:string
  value:any
}


export enum accordionActions{
  changeStyling="[ACCORDION] changeStyling",
  changeForm="[ACCORDION] changeForm",
  expandAccordion="[ACCORDION] expandAccordion"
}

export class AccordionChangeStylingAction implements Action{
  readonly type = accordionActions.changeStyling
  constructor(public payload:boolean) {}
}

export class AccordionChangeFormAction implements Action{
  readonly type = accordionActions.changeForm
  constructor(public payload:ChangeFormValues) {}
}

export class AccordionExpandAction implements Action{
  readonly type = accordionActions.expandAccordion
}

export type AccordionActions = |AccordionChangeFormAction|AccordionChangeStylingAction|AccordionExpandAction
