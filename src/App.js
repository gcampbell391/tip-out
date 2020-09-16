import React from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom';
import history from './history'

import Home from './screens/Home'
import Welcome from './screens/Welcome'

function App() {
  return (
    <Router history={history}>
      <Route exact path="/" render={() => <Welcome />} />
      <Route exact path="/home" render={() => <Home />} />
    </Router>
  );
}

export default App;
