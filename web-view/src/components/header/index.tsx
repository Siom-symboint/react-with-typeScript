import * as React from "react";
import "./header.less";
import { Menu } from "antd";
import { Link } from "react-router-dom";

interface IMenuItem {
  link: string;
  label: string;
}

const menuItem: IMenuItem[] = [
  { link: "/mainPage", label: "主页" },
  { link: "/mainPage/aboutme", label: "关于我" }
];
const menuFormate = menuItem.map((item, i) => {
  return (
    <Menu.Item key={i}>
      <Link to={item.link}>{item.label}</Link>
      {/* {item.label} */}
    </Menu.Item>
  );
});
class Header extends React.Component {
  public render() {
    return (
      <header className="main-page-heander">
        <div>
          <Link to="/mainPage">symboint的个人主页</Link>
        </div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["0"]}
          style={{ lineHeight: "64px" }}
        >
          {menuFormate}
        </Menu>
      </header>
    );
  }
}

export default Header;
