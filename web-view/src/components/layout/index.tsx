import { Menu } from "antd";
import * as React from "react";
const SubMenu = Menu.SubMenu;

import Fetch from "fetch/index";
import { connect } from "react-redux";
import { ISlectedItem, listSelection } from "store/listInfo/action.ts";
import { showDetailPage } from "store/showDetailPage/action.ts";

/**
 * 定义菜单接口
 */
interface IMenuChildItem {
  label: string;
  pageType: number;
}
interface IMenuItem {
  label: string;
  pageType: number;
  children: IMenuChildItem[];
}

export interface IProps {
  onIncrement?: (arg: ISlectedItem) => void;
}

class Layout extends React.Component<IProps, {}> {
  public state = {
    collapsed: false,
    menuList: []
  };

  constructor(props: IProps) {
    super(props);
    // click事件中无法获取到当前组件的(state,props),在构造函数中改变指向
    this.onSelectedItem = this.onSelectedItem.bind(this);
  }

  public componentDidMount() {
    this.getData();
  }

  public toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  public async getData() {
    const res = await Fetch.get("/menuList");
    this.setState({
      menuList: res.data.result
    });
    const { onIncrement } = this.props;
    onIncrement
      ? onIncrement({ menuTag: 1, articleTag: 1 })
      : console.log("error");
  }
  public onSelectedItem(r: any) {
    // 由于onIncrement可能为空?(从语法检查角度来讲,那么做好保护....)
    const { onIncrement } = this.props;
    onIncrement
      ? onIncrement({
          menuTag: Number(r.keyPath[1]),
          articleTag: Number(r.keyPath[0])
        })
      : console.log("error"); // 后续程序错误处理
  }

  public render() {
    const MenuItem = this.state.menuList.map((item: IMenuItem, index) => {
      return (
        <SubMenu
          key={item.pageType}
          title={
            <span>
              <span>{item.label}</span>
            </span>
          }
        >
          {item.children.map((child, j) => {
            return <Menu.Item key={child.pageType}>{child.label}</Menu.Item>;
          })}
        </SubMenu>
      );
    });

    return (
      <div style={{ width: 256 }}>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["1", "2"]}
          mode="inline"
          inlineCollapsed={this.state.collapsed}
          onClick={this.onSelectedItem}
        >
          {MenuItem}
        </Menu>
      </div>
    );
  }
}
// 将dispatch映射到HOC中
export function mapDispatchToProps(dispatch: any) {
  return {
    onIncrement: (arg: ISlectedItem) => {
      dispatch(listSelection(arg));
      dispatch(showDetailPage(false));
    }
  };
}
// 将state映射到HOC中
export function mapStateToProps(state: any) {
  return { menuReducer: state.menuReducer };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
