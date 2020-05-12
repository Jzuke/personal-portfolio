import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routers/AppRouter';
import ReactGA from 'react-ga';
import * as serviceWorker from './serviceWorker';


ReactGA.initialize('UA-92327390-2');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
    <AppRouter />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
