import {combineReducers} from 'redux';
import loginReducer from './Login/reducers';
import homeReducer from './Home/reducers';

const rootReducer = combineReducers({
  login: loginReducer,
  home: homeReducer,
});

export default rootReducer;
