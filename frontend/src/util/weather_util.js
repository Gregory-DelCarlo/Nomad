import axios from 'axios';

const kennyApiKey = 'c6deb36d70944a7cb47190522212602'

export const fetchWeather = (park) => {
  return axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${kennyApiKey}&q=${park.lat},${park.long}&days=7&aqi=no&alerts=no`)
  // return axios.get(`https://api.weatherapi.com/v1/current.json?key=${kennyApiKey}&q=${park.lat},${park.long}&aqi=no`)
  // return axios.get(`https://api.weatherapi.com/v1/current.json?key=${kennyApiKey}&q=${parkId}&aqi=no`)
}