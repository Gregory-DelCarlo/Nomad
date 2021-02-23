import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';

const RootReducer = combineReducers({
  session: sessionReducer,
  errors: ErrorsReducer
});

export default RootReducer;