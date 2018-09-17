import * as React from "react";
import "./App.css";

import Login from "pages/login/index";
import { hot } from "react-hot-loader";

class App extends React.Component {
  public render() {
    return <Login />;
  }
}

export default hot(module)(App);
