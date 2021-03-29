import axios from 'axios';

const kennyApiKey = 'c6deb36d70944a7cb47190522212602'

export const fetchWeather = (park) => {
  return axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${kennyApiKey}&q=${park.lat},${park.long}&days=5&aqi=no&alerts=no`)
}