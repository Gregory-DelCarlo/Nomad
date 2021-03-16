# Nomad

[Live Site](https://nomad2.herokuapp.com/#/)

Need help planning your next outdoor trip? Consider using Nomad, an outdoor backpacking app that makes it easy for users to plan a trip around popular trails in California. Select a trail to view its details and weather forecast. Once you've decided on a route, you can pack your essentials to go along with your trip.

Nomad is created using an Express backend and MongoDB for data storage. The frontend is created with using React/Redux to create a smooth single-page webapp.

## Technologies
* MongoDB
* Mongoose
* Express.js
* Axios
* React/Redux
* Node.js
* HTML
* CSS
* WeatherApi
* Heroku deployment

## Features

### User Auth
* Users can signup or login to an existing account
* Guests can try the app as a demo user
* Credential validations are present
* New users can signup from the front page carousel

<img src="/frontend/src/assets/images/user_auth.gif" />

### Trail Maps
* Select from a drop down to view a list of routes in that particular park/region
* Displays detailed information such as 
    * Distance
    * Difficulty
    * Travel Time
    * Popularity

<img src="/frontend/src/assets/images/trail.gif" />

### Weather Forecast
* Displays live and detailed information about today's weather
* Forecasts up to 3 days of weather for any particular region/park
* Forecast icons are intuitive
* Current weather information persists on refresh

<img src="/frontend/src/assets/images/weather.gif" />

