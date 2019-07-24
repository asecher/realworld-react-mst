import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Layout, Menu } from "antd";

const Header: React.SFC<RouteComponentProps<{}>> = ({ history, location }) => {
  const selectedKeys = (() => {
    switch (location.pathname) {
      case "/":
        return ["1"];
      case "/login":
        return ["2"];
      case "/register":
        return ["3"];
      default:
        return [];
    }
  })();

  return (
    <Layout.Header className="header">
      <div className="logo">Conduit</div>
      <nav>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={selectedKeys}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1" onClick={() => history.push("/")}>
            Home
          </Menu.Item>
          <Menu.Item key="2" onClick={() => history.push("/login")}>
            Sign in
          </Menu.Item>
          <Menu.Item key="3" onClick={() => history.push("/register")}>
            Sign up
          </Menu.Item>
        </Menu>
      </nav>
    </Layout.Header>
  );
};

export default withRouter(Header);
