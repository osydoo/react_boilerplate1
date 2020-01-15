import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import {   
  getDefault,
  getDefaultSuccess,
  getDefaultFail
} from '../reducers/Default';

function* setDefaultLoad(action) {
  try {
    const data = action.payload;
    yield put(getDefaultSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(getDefaultFail());
  }
}

function* watchSetDefaultLoad() {
  yield takeLatest(getDefault, setDefaultLoad);
}

export default function* defaultSaga() {
    yield all([
      fork(watchSetDefaultLoad),
    ]);
  }