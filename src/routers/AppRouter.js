import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import Home from '../components/Home';
import ProjectPage from '../components/ProjectPage';

export const history = createBrowserHistory()

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