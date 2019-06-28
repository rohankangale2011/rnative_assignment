import { all } from 'redux-saga/effects';
import homeSaga from '../components/home/home.saga';

export default function* rootSaga() {
  yield all([homeSaga()]);
}

