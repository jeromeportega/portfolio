import React from 'react';
import Navbar from '../Navbar';
import Home from '../Home';
import Bio from '../Bio';
import Courses from '../Courses';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <Route path='/' component={Navbar} />
    <Route exact path='/' component={Home} />
    <Route exact path='/bio' component={Bio} />
    <Route exact path='/courses' component={Courses} />
  </Router>
);

export default App;
