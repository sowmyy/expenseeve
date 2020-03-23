import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Containers/Home";
import Settings from "./Containers/Settings";
import ReactSVG from 'react-svg';
import Profile from "./Containers/Profile";
// import {homeIcon} from "./assets/home-run.svg";
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
                    {/* <ReactSVG className="icon" path={homeIcon} /> */}H
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/settings">
                    S
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/profile">
                    P
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
