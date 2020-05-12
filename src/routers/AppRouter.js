import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import ReactGA from 'react-ga';
import Home from '../components/Home';
import ProjectPage from '../components/ProjectPage';

export const history = createBrowserHistory()

history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  });

const AppRouter = () => {
    return (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/projects/:project" component={ProjectPage} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
    </Router>
)}

export { AppRouter as default}