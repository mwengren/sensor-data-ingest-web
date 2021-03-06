import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import NotFound from './containers/NotFound';
import StationDashboard from './containers/StationDashboard';


export default ({ childProps }) => {
    return (
        <Switch>
            <Route path="/" exact component={Home} props={childProps}/>
            <Route path="/:id" exact component={StationDashboard} props={childProps}/>
            {/* Finally, catch all unmatched routes */}
            <Route component={NotFound}/>
        </Switch>
    )
};
