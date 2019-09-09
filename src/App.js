import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import ListSites from './views/ListSites.js';
import UnitView from './views/UnitView.js';
import NavigationComponent from './components/NavigationComponent.js';

function App() {
  return (
    <div> 
      <NavigationComponent />
      <Router>
          <Route exact path="/" component={ListSites} />
          <Route path="/unit/:siteId/:unitId" component={UnitView} />
      </Router>
    </div>
  );
}

export default App;
