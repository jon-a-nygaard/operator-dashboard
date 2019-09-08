import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import ListSites from './views/ListSites.js';
import UnitView from './views/UnitView.js';

function App() {
  return (
    <Router>
        <Route exact path="/" component={ListSites} />
        <Route path="/unit/:siteId/:unitId" component={UnitView} />
    </Router>
  );
}

export default App;
