import * as WeatherApiUtil from '../util/weather_util';

export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';

const receiveWeather = weather => {
  return ({
    type: RECEIVE_WEATHER,
    weather
  })
}

export const fetchWeather = (park) => (dispatch) => (
  WeatherApiUtil.fetchWeather(park).then( park => dispatch(receiveWeather(park)) )
)
