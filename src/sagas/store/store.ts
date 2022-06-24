import createSagaMiddleware from 'redux-saga';
import rootSaga from '../rootSaga';
import rootReducer from '../rootReducer';

import {configureStore} from '@reduxjs/toolkit';
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

// const action = type => store.dispatch({type})

// Infer the `storeState` and `AppDispatch` types from the store itself
export type storeState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
