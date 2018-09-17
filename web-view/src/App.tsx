import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./App.css";

import { hot } from "react-hot-loader";
import Login from "pages/login/index";
import MainPage from "pages/mainPage/index";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Switch>
            <Redirect exact={true} path="/" to={{ pathname: "/login" }} />
            <Route path="/login" component={Login} />
            <Route path="/mainPage" component={MainPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
