import React from 'react';
import { render } from 'react-dom';
import './app.scss';
const logo = require('./public/imgs/webpack.png')
const App = () => {
  return(<div>
    <h1>Welcome to Webpack and React!!!</h1>
    <p></p>
    <img src={logo} alt="webpack-logo"/>
    </div>)
}

render(<App/>, document.getElementById('app'));