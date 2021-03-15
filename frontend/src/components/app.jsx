import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav/navbar_container';
import MainPage from './main_page/main_page';
import BackpackContainer from './backpack/backpack_container';
import Profile from './profile /profile_container'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ParksContainer from './parks/park_container';
import WeatherContainer from './weather/weather_container';


const App = () => (
    <div className="app">
        <NavBarContainer />
        <Switch>
            <ProtectedRoute exact path="/backpack" component={BackpackContainer}/>
            <AuthRoute exact path='/' component={MainPage}/>
        </Switch>
            <Route exact path='/park/:parkId' component={ParksContainer}/>
            <Route exact path='/weather' component={WeatherContainer}/>
        <div className="vector-creds">
            <a href="https://www.vecteezy.com/free-vector/summit" className="vector-creds">Summit Vectors by Vecteezy</a>
        </div>
    </div>
);

export default App;