import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './main_page/main_page';

const App = () => (
    <Switch>
        <Route exact path='/' component={MainPage}/>
    </Switch>
);

export default App;