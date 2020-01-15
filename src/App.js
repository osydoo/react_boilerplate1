import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { NotFound, BasicPage } from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={BasicPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
