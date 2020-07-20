import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/routes/PrivateRoute';

import Login from './components/Login';
import BubblePage from './components/BubblePage';
import './styles.scss';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <PrivateRoute path='/bubbles' component={BubblePage} />
          <Route path='/' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
