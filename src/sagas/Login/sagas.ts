import {put, takeEvery, all} from 'redux-saga/effects';
import {ActionTypes} from './actionTypes';

const delay = (ms: number) =>
  new Promise((res: Function) => setTimeout(res, ms));

function* loginVerify() {
  try {
    yield delay(1000);
    yield put({type: ActionTypes.LOGIN_SUCCESS, payload: 'User'});
  } catch (e: any) {
    console.log('error saga', JSON.stringify(e));
  }
}

function* logoutUser() {
  yield put({type: ActionTypes.LOGOUT_SUCCESS, payload: 'Guest'});
}
function* loginVerifyWatcher() {
  yield takeEvery(ActionTypes.LOGIN_VERIFY, loginVerify);
}

function* logoutWatcher() {
  yield takeEvery(ActionTypes.LOGOUT, logoutUser);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* loginSagas() {
  yield all([loginVerifyWatcher(), logoutWatcher()]);
}
