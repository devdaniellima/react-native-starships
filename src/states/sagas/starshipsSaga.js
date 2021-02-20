import {select, takeLatest, call, put} from 'redux-saga/effects';
import {Types, getMoreStarshipsSuccess} from '../ducks/starships';
import {showLoading, hideLoading} from '../ducks/loading';

// Utils
import Api from '../../utils/axios';

export function* getStarships(action) {
  const {page} = action.data;

  yield put(showLoading());

  try {
    const {next, results} = yield call(Api.getStarships, page);
    const nextPage = next ? page + 1 : null;

    if (page === 1) {
      yield put(getMoreStarshipsSuccess({nextPage, list: results}));
    } else {
      const {list} = yield select((state) => state.starshipsReducer);
      yield put(
        getMoreStarshipsSuccess({nextPage, list: list.concat(results)}),
      );
    }
  } catch (ex) {
    //
  }

  yield put(hideLoading());
  return action;
}

export function* watchGetStarships() {
  yield takeLatest(Types.GET_NEXT_STARSHIPS, getStarships);
}
