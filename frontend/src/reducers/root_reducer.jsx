import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';

const RootReducer = combineReducers({
  session: sessionReducer,
  errors: ErrorsReducer,
  ui: uiReducer,
});

export default RootReducer; 