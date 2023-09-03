import React from "react";

import { Layout as Wrapper } from "antd";
import { Outlet } from "react-router-dom";

import { HeaderContent, SideBar } from "components/organisms";

const { Header, Content, Footer } = Wrapper;

const Layout: React.FC = () => {
  const footerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "Grey",
    backgroundColor: "white"
  };
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
        <Content
          className="py-9"
          style={{
            marginLeft: "18px",
            overflow: "hidden"
          }}
        >
          <Outlet />
        </Content>
        <Footer style={footerStyle}>© 2023 ALL RIGHTS RESERVED</Footer>
      </Wrapper>
    </Wrapper>
  );
};

export default Layout;
