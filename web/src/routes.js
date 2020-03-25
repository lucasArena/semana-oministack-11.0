import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/incident/new" component={NewIncident} />
        </Switch>
    )
}