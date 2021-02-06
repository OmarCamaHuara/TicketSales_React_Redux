import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Card from './pages/Cart';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/card" exact component={Card} />
        </Switch>
    );
}