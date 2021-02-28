import { combineReducers } from 'redux';
// import modal from './modal_reducer';
import currentPark from './current_park_reducer';

const uiReducer = combineReducers({
  // modal,
  currentPark
})

export default uiReducer;