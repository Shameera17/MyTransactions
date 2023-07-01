import React from "react";

import { Layout } from "antd";

import SiderMenu from "../../molecules/Menu/SiderMenu";

const SideBar = () => {
  const { Sider } = Layout;
  return (
    <Sider
      id="Sider"
      style={{
        overflow: "auto",
        height: "200vh",
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "white"
      }}
    >
      <div className="demo-logo-vertical" />
      <SiderMenu />
    </Sider>
  );
};

export default SideBar;
