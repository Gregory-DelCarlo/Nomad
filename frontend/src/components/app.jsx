import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav/navbar_container';
import MainPageContainer from './main_page/main_page_container';
import BackpackContainer from './backpack/backpack_container';
import WeatherContainer from './weather/weather_container';
import Profile from './profile/profile_container'
import TripListContainer from './trips/trip_list_container';
import MapsContainer from './maps/maps_container';
const App = () => (
    <div className="app">
        <NavBarContainer />
        <Switch>
            <ProtectedRoute exact path="/backpack" component={BackpackContainer}/>
            <ProtectedRoute exact path="/trips" component={TripListContainer}/>
            <ProtectedRoute exact path='/user/profile' component={Profile}/>
            <Route exact path='/' component={MainPageContainer}/>
            <Route exact path='/maps' component={MapsContainer} />
            <Route exact path='/weather' component={WeatherContainer}/>
        </Switch>
        <div className="vector-creds">
            <a href="https://www.vecteezy.com/free-vector/summit" className="vector-creds">Summit Vectors by Vecteezy</a>
            <a href='https://www.trailsforks.com' className='vector-creds'>Maps by Trailforks</a>
        </div>
    </div>
);

export default App;