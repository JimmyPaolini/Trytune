import React from 'react';
import './App.sass';
import Home from './components/Home.js';
import Dev from './components/Dev.js'
import GuidedInput from './components/GuidedInput.js';
import FreeInput from './components/FreeInput.js';
import TuningSystems from './components/TuningSystems.js'
import Limit5 from './components/Limit5.js'
import Nav from './components/Nav.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router className='App'>
      <Nav />
      <Switch>
        <Route path='/tuningsystems/just' component={Dev} />
        <Route path='/tuningsystems/5-limit' component={Limit5} />
        <Route path='/tuningsystems/meantone' component={Dev} />
        <Route path='/tuningsystems' component={TuningSystems} />
        <Route path='/freeinput' component={FreeInput} />
        <Route path='/guidedinput' component={GuidedInput} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  )
}

export default App;
