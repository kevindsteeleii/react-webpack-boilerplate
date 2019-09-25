import App from './app';
import About from './about';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from  'react-router-dom';
import { createBrowserHistory } from 'history';

const customHistory = createBrowserHistory();

render(
  <Router history={customHistory}>
    <Route path="/app" component={App}/>
    <Route path="/about" component={About}/>
  </Router>,
  document.getElementById('app')
);