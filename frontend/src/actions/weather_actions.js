import { fetchWeather } from '../util/weather_util';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';

const receiveWeather = weather => {
  return ({
    type: RECEIVE_WEATHER,
    weather
  })
}

export const fetchWeather = (city) => (dispatch) => (
  fetchWeather(city).then( city => dispatch(receiveWeather(city)) )
)