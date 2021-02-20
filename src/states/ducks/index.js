import {combineReducers} from 'redux';
import starshipsReducer from './starships';
import loadingReducer from './loading';

const allReducers = combineReducers({
  starshipsReducer,
  loadingReducer,
});

export default allReducers;
