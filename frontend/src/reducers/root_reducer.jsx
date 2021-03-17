import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';
import entitiesReducer from './entities_reducer';
import TripsReducer from './trips_reducer';


const RootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: ErrorsReducer,
  ui: uiReducer,
  trips: TripsReducer
});

export default RootReducer; 