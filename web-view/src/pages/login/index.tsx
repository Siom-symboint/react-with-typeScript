import * as React from "react";
import "./login.less";

import FormPart from "components/loginForm/loginDialog";

class Login extends React.Component {
  public render() {
    return (
      <div className="login-page">
        <FormPart />
      </div>
    );
  }
}

export default Login;
