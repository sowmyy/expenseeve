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

export default class MainApp extends Component {
  render() {
    return (
      <Router>
        <ContainerWrapper>
          Test
        </ContainerWrapper>
      </Router>
    );
  }
}
