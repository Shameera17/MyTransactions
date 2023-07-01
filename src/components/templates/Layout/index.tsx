import React from "react";

import { Layout as Wrapper } from "antd";
import { Outlet } from "react-router-dom";

import SideBar from "../../organisms/SideBar";

const { Header, Content, Footer, Sider } = Wrapper;

const Layout: React.FC = () => {
  return (
    <Wrapper id="wrapper" hasSider className=" h-screen">
      <SideBar />
      <Wrapper className="site-layout" style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: " lightBlue" }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: " lightBlue"
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Wrapper>
    </Wrapper>
  );
};

export default Layout;
