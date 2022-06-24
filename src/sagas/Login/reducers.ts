import {ActionTypes} from './actionTypes';
import {UserActions, userState} from './types';

const initialState: userState = {
  message: ' Guest',
};

const loginReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case ActionTypes.LOGIN_VERIFY: {
      return {...state};
    }
    case ActionTypes.LOGIN_SUCCESS: {
      return {...state, message: action.payload};
    }
    case ActionTypes.LOGOUT: {
      return {...state, message: action.payload};
    }
    case ActionTypes.LOGOUT_SUCCESS: {
      return {...state, message: action.payload};
    }
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof loginReducer>;

export default loginReducer;
