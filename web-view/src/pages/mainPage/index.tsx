import * as React from "react";
import Layout from "components/layout/index";
import Headerform from "components/header/index";
import { Route } from "react-router-dom";

import "./index.less";

function name() {
  return <div>关于我</div>;
}
class Login extends React.Component {
  public render() {
    return (
      <div className="main-page">
        <Headerform />
        <div style={{ marginTop: "80px"}} />
        <Route exact={true} path="/mainPage" component={Layout} />
        <Route path="/mainPage/aboutme" component={name} />
      </div>
    );
  }
}

export default Login;
