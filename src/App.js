import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ListCasos from './components/ListCasos';
import AltaCasos from './containers/AltaCasos';

import './App.css';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Config from './containers/Config';
import { getURL } from './helpers/requestHelpers';

function App() {
  useEffect(() => {
    getURL();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Dashboard />
        </Route>
        <Route exact path='/casos'>
          <ListCasos />
        </Route>
        <Route exact path='/casos/alta' component={AltaCasos} />
        <Route
          exact
          path='/casos/:id/editar'
          render={(props) => <AltaCasos isModify={true} {...props} />}
        ></Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/signup'>
          <Signup />
        </Route>
        <Route exact path='/config'>
          <Config />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
