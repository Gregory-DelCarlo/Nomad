import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav/navbar_container';
import MainPage from './main_page/main_page';
import BackpackContainer from './backpack/backpack_container';
import Modal from './modal/modal';
import ParksContainer from './dropdowns/parks_dropdown_container';


const App = () => (
    <div>
        <Modal />
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path='/' component={MainPage}/>
            <ProtectedRoute exact path="/backpack" component={BackpackContainer}/>
            {/* change backpack to protectedroute after testing */}
        </Switch>
    </div>
);

export default App;