import {all} from 'redux-saga/effects';

import homeSagas from './Home/sagas';
import loginSagas from './Login/sagas';

export default function* rootSaga() {
  yield all([homeSagas(), loginSagas()]);
}
