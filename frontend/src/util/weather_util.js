import axios from 'axios';

const kennyApiKey = 'c6deb36d70944a7cb47190522212602'

export const fetchWeather = (parkId) => {
  return axios.get(`https://api.weatherapi.com/v1/current.json?key=${kennyApiKey}&q=${parkId}&aqi=no`)
}

