import * as React from "react";

import { Input, Button } from "antd";

import "./loginDialog.less";

class FormPart extends React.Component {
  public render() {
    return (
      <div className="login-dialog">
        <Input addonBefore="用户名" />
        <Input type="password" addonBefore="密码" />
        <Button type="primary">登录</Button>
      </div>
    );
  }
}

export default FormPart;
