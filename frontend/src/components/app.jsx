import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav/navbar_container';
import MainPage from './main_page/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
<<<<<<< HEAD
            <Route exact path='/' component={MainPage}/>
=======
            <AuthRoute exact path='/' component={MainPage}/>
>>>>>>> 241f17ac6cee4720eae40e4175167a3be1dfa58c
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            {/* create home (or other) component and add protect routes here */}
            {/* add navbar route, possibly protected */}
        </Switch>
    </div>
);

export default App;