import { Action } from '@ngrx/store';

export interface ChangeFormValues {
  index: number;
  name: string;
  value: string | number | boolean;
}

export enum eAccordionActions {
  changeStyling = '[ACCORDION] changeStyling',
  changeForm = '[ACCORDION] changeForm',
  expandAccordion = '[ACCORDION] expandAccordion',
}

export class AccordionChangeStylingAction implements Action {
  readonly type = eAccordionActions.changeStyling;
  constructor(public payload: boolean) {}
}

export class AccordionChangeFormAction implements Action {
  readonly type = eAccordionActions.changeForm;
  constructor(public payload: ChangeFormValues) {}
}

export class AccordionExpandAction implements Action {
  readonly type = eAccordionActions.expandAccordion;
}

export type AccordionActions = AccordionChangeFormAction | AccordionChangeStylingAction | AccordionExpandAction;
