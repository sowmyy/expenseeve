import { combineReducers } from 'redux';
import homeReducer from './Containers/Home/reducer.js';

const reducers = combineReducers({
  homeReducer,
});

export default reducers;
