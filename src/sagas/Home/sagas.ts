import {put, takeEvery, all} from 'redux-saga/effects';
import {ActionTypes} from './actionTypes';
import axios from 'axios';

function* getData() {
  let result: {} = {};
  try {
    yield axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        result = res.data;
      })
      .catch(e => console.log(e));
    yield put({type: ActionTypes.GET_DATA_SUCCESS, payload: result});
  } catch (e: any) {
    console.log('error get data', JSON.stringify(e));
  }
}

function* getDataWatcher() {
  yield takeEvery(ActionTypes.GET_DATA, getData);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* homeSagas() {
  yield all([getDataWatcher()]);
}
