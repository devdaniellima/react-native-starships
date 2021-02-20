import {all} from 'redux-saga/effects';

import {watchGetStarships} from './starshipsSaga';

function* rootSaga() {
  yield all([watchGetStarships()]);
}

export default rootSaga;
