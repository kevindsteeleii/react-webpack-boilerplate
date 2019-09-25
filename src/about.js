import React from 'react';
import { Link } from 'react-router-dom';
import App from './app';
const About = () => {
  return (<main>
  <p>This is another page that will link out back to the "home" page. </p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, repellendus. Perspiciatis molestias impedit, vero rem nam nisi accusantium voluptates explicabo amet quis nulla? Architecto illum repudiandae tenetur provident tempore voluptates?</p>

  <Link to="/app">Main Page</Link>
  </main>);
}
export default About;