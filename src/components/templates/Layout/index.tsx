import React from "react";

import { Layout as Wrapper } from "antd";
import { Outlet } from "react-router-dom";

import { HeaderContent, SideBar } from "components/organisms";

const { Header, Content, Footer } = Wrapper;

const Layout: React.FC = () => {
  return (
    <Wrapper id="wrapper" hasSider className=" h-screen">
      <SideBar />
      <Wrapper
        className="site-layout px-6 pt-8 bg-white"
        style={{ marginLeft: 200 }}
      >
        <Header className=" bg-white mx-4 h-8 " style={{ padding: 0 }}>
          <HeaderContent />
        </Header>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Wrapper>
    </Wrapper>
  );
};

export default Layout;
