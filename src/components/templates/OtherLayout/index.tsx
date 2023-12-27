import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import {
  contentStyle,
  fontStyle,
  footerStyle,
  headerStyle,
  screenStyle
} from "../styles";

const { Header, Footer, Content } = Layout;

const OtherLayout = () => {
  return (
    <Layout style={screenStyle} className=" h-screen">
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
      <Content
        className="mx-auto max-tablet:mx-4 max-laptop:mx-10 max-desktop:mx-32 "
        style={contentStyle}
      >
        <Outlet />
      </Content>
      <Footer style={footerStyle}>© 2023 ALL RIGHTS RESERVED</Footer>
    </Layout>
  );
};

export default OtherLayout;
