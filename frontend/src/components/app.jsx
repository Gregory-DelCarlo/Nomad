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


const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path='/' component={MainPage}/>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/backpack" component={BackpackContainer}/>
            <Route exact path='/park/:parkId' component={ParksContainer}/>
            <Route exact path='/user/:userId' component={Profile}/>
        </Switch>
        <a href="https://www.vecteezy.com/free-vector/summit">Summit Vectors by Vecteezy</a>
    </div>
);

export default App;