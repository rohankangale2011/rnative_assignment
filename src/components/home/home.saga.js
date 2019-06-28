import { all, call, put, takeEvery } from "redux-saga/effects";
import {HOME_ACTIONS} from './home.action';
import {COMMON_ACTIONS} from '../common/redux/action';
import {NY_MOST_POPULAR} from '../../constant/api';
import {API_ERROR,NO_DATA} from '../../constant/data';
import {getMostPopularData} from './home.service';

export function* watchGetNYPopularData() {
  yield takeEvery(HOME_ACTIONS.GET_DATA, getNYData);
}

/**
 * Function responsible for getting the nytimes most popular data from the requested api
 */
export function* getNYData() {
  try {
    yield put({ type: COMMON_ACTIONS.SET_LOADER_VISIBILITY, payload: true});
    const response = yield call(getMostPopularData, NY_MOST_POPULAR);

    if(response && response.data && response.data.results) {
      // update home state for the successfully responsed dataset
      yield put({ type: HOME_ACTIONS.SET_DATA, payload: response.data.results });
    } else {
      // display toaster message when no dataset found
      yield put({ type: COMMON_ACTIONS.SET_SNACKBAR_MESSAGE, payload: {isVisible: true, message: NO_DATA} });
    }

    yield put({ type: COMMON_ACTIONS.SET_LOADER_VISIBILITY, payload: false});
  } catch(err) {
    // display error message for the catched error callback
    yield put({ type: COMMON_ACTIONS.SET_SNACKBAR_MESSAGE, payload: {isVisible: true, message: API_ERROR} });
    yield put({ type: COMMON_ACTIONS.SET_LOADER_VISIBILITY, payload: false});
  }
}

export default function* homeSaga() {
  yield all(
    [
      watchGetNYPopularData() // function initiating data fetch for NYTimes most populat dataset
    ]
  );
}
