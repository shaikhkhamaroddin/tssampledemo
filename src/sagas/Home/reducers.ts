import {ActionTypes} from './actionTypes';
import {HomeState, HomeDataActions} from './types';

const initialState: HomeState = {
  data: {},
  loading: false,
};

const homeReducer = (state = initialState, action: HomeDataActions) => {
  switch (action.type) {
    case ActionTypes.GET_DATA: {
      return {...state, loading: true};
    }
    case ActionTypes.GET_DATA_SUCCESS: {
      return {...state, data: action.payload, loading: false};
    }
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof homeReducer>;

export default homeReducer;
