import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Season from "./pages/Season";
import Episode from "./pages/Episode";
import Watch from "./pages/Watch";

const Routes = () => (
    <Switch>
        <Route path="/" exact component={Season} />
        <Route path="/seasons/:season" exact component={Episode} />
        <Route path="/seasons/:season/episodes/:episode" exact component={Watch} />
    </Switch>
);

export default Routes;
