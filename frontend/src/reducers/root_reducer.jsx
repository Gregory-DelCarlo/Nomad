import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';
import entitiesReducer from './entities_reducer';
import tripsReducer from './trips_reducer';

const RootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: ErrorsReducer,
  ui: uiReducer,
  backpack: tripsReducer
});

export default RootReducer; 