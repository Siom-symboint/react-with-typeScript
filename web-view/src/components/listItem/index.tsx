import * as React from "react";
import { Card } from "antd";

const { Meta } = Card;

import "./index.less";

interface IProps {
  title: string;
  content: string;
  [propName: string]: any;
}

class FormPart extends React.Component<IProps> {
  public render() {
    return (
      <Card hoverable={true} bordered={true} className="list-item">
        <Meta title={this.props.title} description={this.props.content} />
      </Card>
    );
  }
}

export default FormPart;
