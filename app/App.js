import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Containers/Home";
import Settings from "./Containers/Settings";
import Profile from "./Containers/Profile";
import {
  NavBar,
  NavComponentStyle,
  RenderSection,
  ContainerWrapper
} from "./AppStyles";

export default class App extends Component {
  render() {
    return (
      <Router>
        <ContainerWrapper>
          <NavComponentStyle>
            <nav className="nav flex-column">
              <NavBar>
                <li>
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/settings">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/profile">
                    Profile
                  </Link>
                </li>
              </NavBar>
            </nav>
          </NavComponentStyle>
          <RenderSection>
            <Switch>
              <Route exact path="/settings">
                <Settings />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </RenderSection>
        </ContainerWrapper>
      </Router>
    );
  }
}
