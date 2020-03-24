import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Containers/Home";
import Settings from "./Containers/Settings";
import Profile from "./Containers/Profile";
import { ReactSVG } from 'react-svg';
import homeIcon from "./assets/home-run.svg";
import settingsIcon from "./assets/settings.svg";
import profileIcon from "./assets/user.svg";
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
                  <Link className='nav-link active' to="/">
                    <ReactSVG className="icon" src={homeIcon} />
                  </Link>
                </li>
                <li>
                  <Link className='nav-link' to="/settings">
                    <ReactSVG className="icon" src={settingsIcon} />
                  </Link>
                </li>
                <li>
                  <Link className='nav-link' to="/profile">
                    <ReactSVG className="icon" src={profileIcon} />
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
