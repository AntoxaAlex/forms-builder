import { User } from '../../interfaces/user.interface';
import { eUserActions, UserActions } from '../actions/userActions';

export interface UserState {
  user: User | null;
  loading: boolean;
  loaded: boolean;
}

const initialState: UserState = {
  user: null,
  loading: false,
  loaded: false,
};

export const userReducer = (state: UserState = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case eUserActions.addUserToState:
      return {
        ...state,
        user: action.payload,
      };
    case eUserActions.removeUser:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
