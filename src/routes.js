import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from "./pages/Main";
import Watch from "./pages/Watch";

const Routes = () => (
    <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/seasons/:season" exact component={Main} />
        <Route path="/seasons/:season/episodes/:episode" component={Watch} />
    </Switch>
);

export default Routes;
