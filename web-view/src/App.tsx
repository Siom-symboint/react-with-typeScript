import * as React from "react";
import "./App.css";

import { hot } from "react-hot-loader";

import { RouterFormate } from "./baseRouter/index";
class App extends React.Component {
  public render() {
    return <RouterFormate/>;
  }
}

export default hot(module)(App);
