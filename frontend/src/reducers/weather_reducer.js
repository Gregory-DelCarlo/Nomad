import { RECEIVE_WEATHER } from '../actions/weather_actions';

const weatherReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_WEATHER:
      return action.weather
    default:
      return oldState
  }
}

export default weatherReducer