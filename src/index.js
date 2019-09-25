import App from './app';
import About from './about';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect } from  'react-router-dom';
import { createBrowserHistory } from 'history';

const customHistory = createBrowserHistory();
ReactDOM.render(
  <Router history={customHistory}>
    <Route path="/app" component={App}/>
    <Route path="/about" component={About}/>
    <Redirect to="/app"/>
  </Router>,
  document.getElementById('app')
);