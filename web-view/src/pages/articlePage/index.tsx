import * as React from "react";

import "./index.less";

import ListItem from "components/listItem";
import ArticleDetail from "components/articleDetail";
import Layout from "components/layout/index";
import { connect } from "react-redux";
import { showDetailPage } from "store/showDetailPage/action.ts";
import Fetch from "fetch/index";

interface IProp {
  menuReducer: object;
  [propName: string]: any;
}
interface IArticleItem {
  title: string;
  content: string;
}
class ArticlePage extends React.Component<IProp> {
  public state = {
    list: [],
    isShowDetail: false
  };
  constructor(props: any) {
    super(props);
    console.log(this.props);
    this.turnToDetailPage = this.turnToDetailPage.bind(this);
  }

  public componentDidMount() {
    this.reFreshList(this.props);
  }
  public componentWillReceiveProps(nextProps: IProp) {
    console.log(nextProps);
    this.reFreshList(nextProps.menuReducer);
  }

  public async reFreshList(request: object) {
    try {
      const res = await Fetch.post("/articleList", request);
      this.setState({ list: res.data.result });
    } catch (error) {
      console.log(error);
    }
  }
  public turnToDetailPage() {
    const { turnToDetail } = this.props;
    turnToDetail(true);
  }

  public render() {
    const menuItem = this.state.list.map((item: IArticleItem, index) => {
      return (
        <div onClick={this.turnToDetailPage} key={index}>
          <ListItem title={item.title} content={item.content} />
        </div>
      );
    });
    const detailForm = <ArticleDetail />;
    const showSomeThing = this.props.detailReducer.isDetailPage
      ? detailForm
      : menuItem;
    return (
      <div className="article-page">
        <Layout />
        <div className="article-area">{showSomeThing}</div>
      </div>
    );
  }
}
// 将dispatch映射到HOC中
export function mapDispatchToProps(dispatch: any) {
  return {
    turnToDetail: (arg: boolean) => dispatch(showDetailPage(arg))
  };
}

// 将state映射到HOC中
export function mapStateToProps(state: any) {
  return { menuReducer: state.menuReducer, detailReducer: state.detailReducer };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlePage);
