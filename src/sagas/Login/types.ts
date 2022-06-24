import {ActionTypes} from './actionTypes';

export interface userState {
  message: string;
}

export type LoginVerifyUser = {
  type: typeof ActionTypes.LOGIN_VERIFY;
};

export type LoginSuccesUser = {
  type: typeof ActionTypes.LOGIN_SUCCESS;
  payload: string;
};

export type UserActions = LoginVerifyUser | LoginSuccesUser;
