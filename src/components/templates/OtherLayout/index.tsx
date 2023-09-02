import React from "react";

import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Footer, Content } = Layout;
const screenStyle: React.CSSProperties = {
  paddingTop: "32px",
  backgroundColor: "white"
};

const headerStyle: React.CSSProperties = {
  color: "black",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "white"
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "white",
  overflow: "auto"
};

const fontStyle: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: 600,
  lineHeight: "24px",
  letterSpacing: "0px",
  textAlign: "left"
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "Grey",
  backgroundColor: "white"
};
const OtherLayout = () => {
  return (
    <Layout
      className=" h-screen tablet:px-8 laptop:px-32 desktop:px-32"
      style={screenStyle}
    >
      <Header style={headerStyle}>
        <div className="demo-logo-vertical p-1 ">
          <span style={fontStyle} className=" text-crayola font-medium">
            Expense
          </span>
          <span style={fontStyle} className="font-medium ">
            Tracker
          </span>
        </div>
      </Header>
      <Content className="" style={contentStyle}>
        <Outlet />
      </Content>
      <Footer style={footerStyle}>© 2023 ALL RIGHTS RESERVED</Footer>
    </Layout>
  );
};

export default OtherLayout;
