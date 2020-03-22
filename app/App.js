import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Home from './Containers/Home';
import Settings from './Containers/Settings';
import Profile from './Containers/Profile';


export default class App extends Component {
    render() {
        return (
            <div>
            <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/settings">Settings</Link>
                  </li>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                </ul>
              </nav>
              <Switch>
                <Route exact path="settings">
                  <Settings />
                </Route>
                <Route exact path="profile">
                  <Profile />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
            </div>
        )
    }
}
