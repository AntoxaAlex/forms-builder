import { Action } from '@ngrx/store';

import { User } from '../../interfaces/user.interface';

export enum eUserActions {
  fetchUser = '[USER] getUser',
  addUserToState = '[USER] addUserToState',
  removeUser = '[USER] removeUser',
}

export class FetchUserAction implements Action {
  readonly type = eUserActions.fetchUser;
}

export class AddUserActions implements Action {
  readonly type = eUserActions.addUserToState;
  constructor(public payload: User) {}
}

export class RemoveUserAction implements Action {
  readonly type = eUserActions.removeUser;
}

export type UserActions = FetchUserAction | AddUserActions | RemoveUserAction;
