import React from "react";

import { Menu } from "antd";
import MenuItem from "antd/es/menu/MenuItem";

const SiderMenu = () => {
  return (
    <Menu id="Menu" theme="light" mode="inline">
      <MenuItem key={0}> Dashboard</MenuItem>
      <MenuItem key={1}>Settings</MenuItem>
    </Menu>
  );
};

export default SiderMenu;
