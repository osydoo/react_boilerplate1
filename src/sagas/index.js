import { all } from 'redux-saga/effects';
import defaultSaga from "./defaultSaga";

export default function* rootSaga() {
  yield all([
    defaultSaga()
  ]);
}
