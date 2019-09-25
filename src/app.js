import React from 'react';
import { Link } from 'react-router-dom';
import About from './about';
import './app.scss';
const logo = require('./public/imgs/webpack.png');

const App = () => {
  return(<div>
    <h1>Welcome to Webpack and React!!!</h1>
    <img src={logo} alt="webpack-logo"/>
    <Link to="/about">About stuff</Link>
    </div>)
}

export default App;

// render(<App/>, document.getElementById('app'));