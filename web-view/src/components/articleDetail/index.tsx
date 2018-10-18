import * as React from "react";

import "./index.less";
import Fetch from "fetch/index";
import * as marked from "marked";
import * as hljs from "highlight.js";
import "highlight.js/styles/atom-one-light.css";

class ArticleDetail extends React.Component {
  public state = {
    articleDetail: ""
  };

  public async getDetail() {
    const res = await Fetch.post("http://127.0.0.1:9999/README.md");
    this.setState({
      articleDetail: res
    });
  }
  public componentDidMount() {
    marked.setOptions({
      highlight: code => hljs.highlightAuto(code).value
    });
    this.getDetail();
  }

  public componentWillReceiveProps(){
    this.getDetail();
  }

  public render() {
    return (
      <div
        className="article-detail"
        dangerouslySetInnerHTML={{
          __html: marked(this.state.articleDetail)
        }}
      />
    );
  }
}

export default ArticleDetail;
