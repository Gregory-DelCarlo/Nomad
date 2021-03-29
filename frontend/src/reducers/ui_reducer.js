import { combineReducers } from 'redux';
import currentPark from './current_park_reducer';

const uiReducer = combineReducers({
  currentPark
})

export default uiReducer;