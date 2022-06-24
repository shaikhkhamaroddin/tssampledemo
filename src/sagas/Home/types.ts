import {ActionTypes} from './actionTypes';

export interface HomeState {
  data: {};
  loading: boolean;
}

export type HomeGetData = {
  type: typeof ActionTypes.GET_DATA;
  loading: boolean;
};

export type HomeGetDataSuccess = {
  type: typeof ActionTypes.GET_DATA_SUCCESS;
  loading: boolean;
  payload: {};
};

export type HomeDataActions = HomeGetData | HomeGetDataSuccess;
